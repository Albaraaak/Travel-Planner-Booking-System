import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [supportMessages, setSupportMessages] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [userSearch, setUserSearch] = useState("");
const [productSearch, setProductSearch] = useState("");
const [ticketSearch, setTicketSearch] = useState("");

  const [editingProduct, setEditingProduct] = useState(null);
  const [editingTicket, setEditingTicket] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    destination: "",
    price: "",
    availableSeats: "",
    duration: "",
    type: "",
    image: "",
  });

  const [ticketForm, setTicketForm] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    price: "",
    availableSeats: "",
    type: "economy",
    travelType: "one-way",
  });

  const token = localStorage.getItem("token");
  const adminUser = JSON.parse(localStorage.getItem("user"));

  const fetchAllData = () => {
    axios
      .get("http://localhost:3000/api/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStats(res.data))
      .catch((err) => {
  console.log(err);

  if (err.response?.status === 403 || err.response?.status === 401) {
    alert("Admin access expired. Please login again.");
    localStorage.clear();
    window.location.href = "/login";
  }
});

    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data.data || []))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/tickets")
      .then((res) => setTickets(res.data.data || []))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/admin/users/getAllUsers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data.data || res.data.users || []))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data.data || []))
      .catch((err) => console.log(err));

      axios
  .get("http://localhost:3000/api/support/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => setSupportMessages(res.data.data || []))
  .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchAllData();
  }, []);

  const resetTicketForm = () => {
    setTicketForm({
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      price: "",
      availableSeats: "",
      type: "economy",
      travelType: "one-way",
    });
  };

  const handleAddTicket = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/tickets", {
        ...ticketForm,
        price: Number(ticketForm.price),
        availableSeats: Number(ticketForm.availableSeats),
      });

      setTickets([...tickets, res.data.data]);
      resetTicketForm();
      fetchAllData();

      alert("Ticket added successfully ✅");
    } catch (err) {
      console.log(err);
      alert("Failed to add ticket");
    }
  };

  const handleEditTicket = (ticket) => {
    setEditingTicket(ticket);

    setTicketForm({
      from: ticket.from || "",
      to: ticket.to || "",
      departureDate: ticket.departureDate || "",
      returnDate: ticket.returnDate || "",
      price: ticket.price || "",
      availableSeats: ticket.availableSeats || "",
      type: ticket.type || "economy",
      travelType: ticket.travelType || "one-way",
    });
  };

  const handleSaveTicketEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/tickets/${editingTicket._id}`,
        {
          ...ticketForm,
          price: Number(ticketForm.price),
          availableSeats: Number(ticketForm.availableSeats),
        }
      );

      setTickets(
        tickets.map((t) =>
          t._id === editingTicket._id ? res.data.data : t
        )
      );

      setEditingTicket(null);
      resetTicketForm();
      fetchAllData();

      alert("Ticket updated successfully ✅");
    } catch (err) {
      console.log(err);
      alert("Failed to update ticket");
    }
  };

  const handleDeleteTicket = async (id) => {
    if (!window.confirm("Delete this ticket?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/tickets/${id}`);

      setTickets(tickets.filter((t) => t._id !== id));
      fetchAllData();

      alert("Ticket deleted successfully ❌");
    } catch (err) {
      console.log(err);
      alert("Failed to delete ticket");
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(products.filter((p) => p._id !== id));
      fetchAllData();
    } catch (err) {
      console.log(err);
      alert("Failed to delete product");
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);

    setEditForm({
      title: product.title || "",
      destination: product.destination || "",
      price: product.price || "",
      availableSeats: product.availableSeats || "",
      duration: product.duration || "",
      type: product.type || "",
      image: product.image || "",
    });
  };

  const handleSaveProductEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/products/${editingProduct._id}`,
        {
          ...editForm,
          price: Number(editForm.price),
          availableSeats: Number(editForm.availableSeats),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts(
        products.map((p) =>
          p._id === editingProduct._id ? res.data.data : p
        )
      );

      setEditingProduct(null);
      fetchAllData();
    } catch (err) {
      console.log(err);
      alert("Failed to update product");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/admin/users/delete-user/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUsers(users.filter((u) => u._id !== id));
      fetchAllData();
    } catch (err) {
      console.log(err);
      alert("Failed to delete user");
    }
  };

  const handleChangeRole = async (id, currentRole) => {
    try {
      const newRole = currentRole === "admin" ? "user" : "admin";

      const res = await axios.put(
        `http://localhost:3000/api/admin/users/change-role/${id}`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(users.map((u) => (u._id === id ? res.data.data : u)));

      fetchAllData();
    } catch (err) {
      console.log(err);
      alert("Failed to change role");
    }
  };

  const handleConfirmBooking = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/bookings/${id}`,
        { status: "confirmed" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(bookings.map((b) => (b._id === id ? res.data.data : b)));

      fetchAllData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBooking = async (id) => {
    if (!window.confirm("Cancel/Delete booking?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(bookings.filter((b) => b._id !== id));
      fetchAllData();
    } catch (err) {
      console.log(err);
    }
  };

  if (!stats) {
  return (
    <div style={styles.loadingPage}>
      <div style={styles.spinner}></div>
      <h2>Loading Admin Dashboard...</h2>
    </div>
  );
}

  const chartData = [
    { name: "Users", total: stats.totalUsers },
    { name: "Products", total: stats.totalProducts },
    { name: "Tickets", total: tickets.length },
    { name: "Bookings", total: stats.totalBookings },
    
  ];

  const menu = [
    "dashboard",
    "revenue",
    "users",
    "products",
    "tickets",
    "bookings",
    "support",
    
];
const filteredUsers = users.filter(
  (u) =>
    u.username?.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.role?.toLowerCase().includes(userSearch.toLowerCase())
);

const filteredProducts = products.filter(
  (p) =>
    p.title?.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.destination?.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.type?.toLowerCase().includes(productSearch.toLowerCase())
);

const filteredTickets = tickets.filter(
  (t) =>
    t.from?.toLowerCase().includes(ticketSearch.toLowerCase()) ||
    t.to?.toLowerCase().includes(ticketSearch.toLowerCase()) ||
    t.type?.toLowerCase().includes(ticketSearch.toLowerCase()) ||
    t.travelType?.toLowerCase().includes(ticketSearch.toLowerCase())
);

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Let's GO</h2>

        <p style={styles.adminText}>Admin Control Panel</p>

        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActivePage(item)}
            style={{
              ...styles.menuBtn,
              background: activePage === item ? "#ffffff" : "transparent",
              color: activePage === item ? "#4f46e5" : "#e0e7ff",
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </aside>

      <main style={styles.main}>
        <div style={styles.topbar}>
          <div>
           <h1 style={styles.pageTitle}>Welcome Admin, {adminUser?.username || "Admin"}</h1>
            <p style={styles.subtitle}>Manage your whole system sir.</p>
          </div>

          <button
            style={styles.logout}
            onClick={() => {
              localStorage.clear();
              window.location.href = "/Login";
            }}
          >
            Logout
          </button>
        </div>

        {activePage === "dashboard" && (
          <>
            <div style={styles.cards}>
              <StatCard title="Total Users" value={stats.totalUsers} />
              <StatCard title="Total Products" value={stats.totalProducts} />
              <StatCard title="Total Tickets" value={tickets.length} />
              <StatCard title="Total Bookings" value={stats.totalBookings} />
              
            </div>

            <div style={styles.chartBox}>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {activePage === "products" && (
          <>
            <h1 style={styles.sectionTitle}>Manage Packages</h1>
            <input style={styles.searchInput}
  type="text"
  placeholder="Search packages..."
  value={productSearch}
  onChange={(e) => setProductSearch(e.target.value)}
/>

            <div style={styles.productGrid}>
              {filteredProducts.map((p) => (
                <div style={styles.rowCard} key={p._id}>
                  <img src={p.image} alt={p.title} style={styles.productImage} />

                  <h2 style={styles.productTitle}>{p.title}</h2>

                  <p style={styles.text}>
                    <b>Destination:</b> {p.destination}
                  </p>

                  <p style={styles.text}>
                    <b>Type:</b> {p.type}
                  </p>

                  <p style={styles.text}>
                    <b>Duration:</b> {p.duration}
                  </p>

                  <h3 style={styles.price}>${p.price}</h3>

                  <p style={styles.text}>
                    <b>Seats:</b> {p.availableSeats}
                  </p>

                  <div style={styles.actionButtons}>
                    <button
                      style={styles.editBtn}
                      onClick={() => handleEditProduct(p)}
                    >
                      Edit
                    </button>

                    <button
                      style={styles.deleteBtn}
                      onClick={() => handleDeleteProduct(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "tickets" && (
          <>
            <h1 style={styles.sectionTitle}>Manage Tickets</h1>
            <input
  style={styles.searchInput}
  type="text"
  placeholder="Search tickets..."
  value={ticketSearch}
  onChange={(e) => setTicketSearch(e.target.value)}
/>

            <div style={styles.formBox}>
              <h2 style={styles.sectionTitle}>
                {editingTicket ? "Edit Ticket" : "Add New Ticket"}
              </h2>

              <div style={styles.formGrid}>
                <input
                  style={styles.input}
                  value={ticketForm.from}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, from: e.target.value })
                  }
                  placeholder="From"
                />

                <input
                  style={styles.input}
                  value={ticketForm.to}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, to: e.target.value })
                  }
                  placeholder="To"
                />

                <input
                  style={styles.input}
                  type="date"
                  value={ticketForm.departureDate}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      departureDate: e.target.value,
                    })
                  }
                />

                <input
                  style={styles.input}
                  type="date"
                  value={ticketForm.returnDate}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      returnDate: e.target.value,
                    })
                  }
                />

                <input
                  style={styles.input}
                  type="number"
                  value={ticketForm.price}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, price: e.target.value })
                  }
                  placeholder="Price"
                />

                <input
                  style={styles.input}
                  type="number"
                  value={ticketForm.availableSeats}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      availableSeats: e.target.value,
                    })
                  }
                  placeholder="Available Seats"
                />

                <select
                  style={styles.input}
                  value={ticketForm.type}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, type: e.target.value })
                  }
                >
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first-class">First Class</option>
                </select>

                <select
                  style={styles.input}
                  value={ticketForm.travelType}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      travelType: e.target.value,
                    })
                  }
                >
                  <option value="one-way">One Way</option>
                  <option value="round-trip">Round Trip</option>
                </select>
              </div>

              <div style={styles.actionButtons}>
                <button
                  style={styles.editBtn}
                  onClick={editingTicket ? handleSaveTicketEdit : handleAddTicket}
                >
                  {editingTicket ? "Save Ticket" : "Add Ticket"}
                </button>

                {editingTicket && (
                  <button
                    style={styles.deleteBtn}
                    onClick={() => {
                      setEditingTicket(null);
                      resetTicketForm();
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            <br />

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>From</th>
                    <th style={styles.th}>To</th>
                    <th style={styles.th}>Travel Type</th>
                    <th style={styles.th}>Class</th>
                    <th style={styles.th}>Departure</th>
                    <th style={styles.th}>Return</th>
                    <th style={styles.th}>Seats</th>
                    <th style={styles.th}>Price</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTickets.map((t) => (
                    <tr key={t._id}>
                      <td style={styles.td}>{t.from}</td>
                      <td style={styles.td}>{t.to}</td>
                      <td style={styles.td}>{t.travelType}</td>
                      <td style={styles.td}>{t.type}</td>
                      <td style={styles.td}>{t.departureDate}</td>
                      <td style={styles.td}>{t.returnDate || "N/A"}</td>
                      <td style={styles.td}>{t.availableSeats}</td>
                      <td style={styles.td}>${t.price}</td>
                      <td style={styles.td}>
                        <div style={styles.actionButtons}>
                          <button
                            style={styles.editBtn}
                            onClick={() => handleEditTicket(t)}
                          >
                            Edit
                          </button>

                          <button
                            style={styles.deleteBtn}
                            onClick={() => handleDeleteTicket(t._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activePage === "users" && (
          <>
            <h1 style={styles.sectionTitle}>Users Management</h1>
            <input
  style={styles.searchInput}
  type="text"
  placeholder="Search users..."
  value={userSearch}
  onChange={(e) => setUserSearch(e.target.value)}
/>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Username</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Role</th>
                    <th style={styles.th}>Verified</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u._id}>
                      <td style={styles.td}>{u.username}</td>
                      <td style={styles.td}>{u.email}</td>
                      <td style={styles.td}>{u.role}</td>
                      <td style={styles.td}>{u.isVerified ? "Yes" : "No"}</td>

                      <td style={styles.td}>
                        <div style={styles.actionButtons}>
                          <button
                            style={styles.editBtn}
                            onClick={() => handleChangeRole(u._id, u.role)}
                          >
                            Change Role
                          </button>

                          <button
                            style={styles.deleteBtn}
                            onClick={() => handleDeleteUser(u._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activePage === "bookings" && (
          <>
            <h1 style={styles.sectionTitle}>Bookings</h1>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Product</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Payment</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((b) => (
                    <tr key={b._id}>
                      <td style={styles.td}>{b.product?.title}</td>

                      <td style={styles.td}>
                        <span
                          style={
  b.status === "confirmed"
    ? styles.statusConfirmed
    : b.status === "paid"
    ? styles.statusPaid
    : b.status === "cancelled"
    ? styles.statusCancelled
    : styles.statusPending
}
                        >
                          {b.status}
                        </span>
                      </td>

                      <td style={styles.td}>${b.totalPrice}</td>

                      <td style={styles.td}>
                        <div style={styles.actionButtons}>
                          <button
                            style={styles.editBtn}
                            onClick={() => handleConfirmBooking(b._id)}
                          >
                            Confirm
                          </button>

                          <button
                            style={styles.deleteBtn}
                            onClick={() => handleDeleteBooking(b._id)}
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {activePage === "support" && (
  <>
    <h1 style={styles.sectionTitle}>
      Support Messages
    </h1>

    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>User</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Message</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Reply</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {supportMessages.map((msg) => (
            <tr key={msg._id}>
              <td style={styles.td}>
                {msg.username}
              </td>

              <td style={styles.td}>
                {msg.email}
              </td>

              <td style={styles.td}>
                {msg.message}
              </td>

              <td style={styles.td}>
                <span
                  style={
                    msg.status === "resolved"
                      ? styles.statusConfirmed
                      : styles.statusPending
                  }
                >
                  {msg.status}
                </span>
              </td>

              <td style={styles.td}>
                {msg.reply || "No reply"}
              </td>

              <td style={styles.td}>
                <textarea
                  placeholder="Reply..."
                  style={{
                    width: "200px",
                    height: "80px",
                    borderRadius: "10px",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  onChange={(e) =>
                    setReplyText(e.target.value)
                  }
                />

                <div style={styles.actionButtons}>
                  <button
                    style={styles.editBtn}
                    onClick={async () => {
                      try {
                        await axios.put(
                          `http://localhost:3000/api/support/reply/${msg._id}`,
                          {
                            reply: replyText,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          }
                        );

                        fetchAllData();

                        alert("Reply sent ✅");
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    Reply
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={async () => {
                      try {
                        await axios.delete(
                          `http://localhost:3000/api/support/${msg._id}`,
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          }
                        );

                        fetchAllData();
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

{activePage === "revenue" && (
  <>
    <h1 style={styles.sectionTitle}>Revenue Analytics</h1>

    <div style={styles.cards}>
      <StatCard
        title="Total Revenue"
        value={`$${stats.totalRevenue}`}
      />

      <StatCard
        title="Total Bookings"
        value={stats.totalBookings}
      />

      <StatCard
        title="Average Booking"
        value={
          stats.totalBookings > 0
            ? `$${Math.round(stats.totalRevenue / stats.totalBookings)}`
            : "$0"
        }
      />

      <StatCard
        title="Confirmed Bookings"
        value={bookings.filter((b) => b.status === "confirmed").length}
      />
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "22px",
        marginBottom: "26px",
      }}
    >
      <div style={styles.chartBox}>
        <h2 style={styles.sectionTitle}>Monthly Revenue</h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={[
              { month: "Jan", revenue: 1200 },
              { month: "Feb", revenue: 2400 },
              { month: "Mar", revenue: 1800 },
              { month: "Apr", revenue: 3200 },
              { month: "May", revenue: 2700 },
              { month: "Jun", revenue: stats.totalRevenue || 0 },
            ]}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="revenue"
              fill="#06b6d4"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartBox}>
        <h2 style={styles.sectionTitle}>Booking Status</h2>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={[
                {
                  name: "Confirmed",
                  value: bookings.filter((b) => b.status === "confirmed")
                    .length,
                },
                {
                  name: "Pending",
                  value: bookings.filter((b) => b.status !== "confirmed")
                    .length,
                },
              ]}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
              fill="#7c3aed"
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div style={styles.tableContainer}>
      <h2 style={styles.sectionTitle}>Recent Transactions</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Package</th>
            <th style={styles.th}>Guests</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.slice(0, 6).map((b) => (
            <tr key={b._id}>
              <td style={styles.td}>
                {b.product?.title || "Booking"}
              </td>

              <td style={styles.td}>
                {b.nbOfPeople || "N/A"}
              </td>

              <td style={styles.td}>
                ${b.totalPrice || 0}
              </td>

              <td style={styles.td}>
                <span
                  style={
  b.status === "confirmed"
    ? styles.statusConfirmed
    : b.status === "paid"
    ? styles.statusPaid
    : b.status === "cancelled"
    ? styles.statusCancelled
    : styles.statusPending
}
                >
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}
        {editingProduct && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalBox}>
              <h2 style={styles.sectionTitle}>Edit Product</h2>

              <input
                style={styles.input}
                value={editForm.title}
                onChange={(e) =>
                  setEditForm({ ...editForm, title: e.target.value })
                }
                placeholder="Title"
              />

              <input
                style={styles.input}
                value={editForm.destination}
                onChange={(e) =>
                  setEditForm({ ...editForm, destination: e.target.value })
                }
                placeholder="Destination"
              />

              <input
                style={styles.input}
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
                placeholder="Price"
              />

              <input
                style={styles.input}
                value={editForm.availableSeats}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    availableSeats: e.target.value,
                  })
                }
                placeholder="Available Seats"
              />

              <input
                style={styles.input}
                value={editForm.duration}
                onChange={(e) =>
                  setEditForm({ ...editForm, duration: e.target.value })
                }
                placeholder="Duration"
              />

              <input
                style={styles.input}
                value={editForm.type}
                onChange={(e) =>
                  setEditForm({ ...editForm, type: e.target.value })
                }
                placeholder="Type"
              />

              <input
                style={styles.input}
                value={editForm.image}
                onChange={(e) =>
                  setEditForm({ ...editForm, image: e.target.value })
                }
                placeholder="Image URL"
              />

              <div style={styles.actionButtons}>
                <button style={styles.editBtn} onClick={handleSaveProductEdit}>
                  Save Changes
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() => setEditingProduct(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
function StatCard({ title, value }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.statCard,
        transform: hover
          ? "translateY(-6px) scale(1.03)"
          : "translateY(0px) scale(1)",
        boxShadow: hover
          ? "0 25px 70px rgba(6, 182, 212, 0.25)"
          : "0 18px 50px rgba(0,0,0,0.22)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p style={styles.cardLabel}>{title}</p>
      <h2 style={styles.cardValue}>{value}</h2>
    </div>
  );
}

      
const styles = {
  loadingPage: {
  minHeight: "100vh",
  background: "#07111f",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
},

spinner: {
  width: "55px",
  height: "55px",
  border: "6px solid rgba(255,255,255,0.2)",
  borderTop: "6px solid #06b6d4",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
},
  page: {
    minHeight: "100vh",
    display: "flex",
    background:
      "radial-gradient(circle at top left, rgba(124,58,237,0.22), transparent 32rem), linear-gradient(135deg, #07111f, #0b1730)",
    color: "#f8fafc",
    fontFamily: "Inter, Arial, sans-serif",
  },
  sidebar: {
    width: "270px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    padding: "28px 22px",
    minHeight: "100vh",
    borderRight: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
  },
  logo: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "900",
    letterSpacing: "-0.05em",
  },
  adminText: {
    color: "#aebdd3",
    marginBottom: "34px",
    fontSize: "14px",
  },
  menuBtn: {
    display: "block",
    width: "100%",
    padding: "13px 15px",
    marginBottom: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "800",
    boxShadow: "none",
  },
  main: {
    flex: 1,
    padding: "30px",
    overflowX: "auto",
  },
  topbar: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
    marginBottom: "28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
    backdropFilter: "blur(18px)",
  },
  pageTitle: {
    margin: 0,
    color: "#ffffff",
  },
  subtitle: {
    color: "#aebdd3",
  },
  logout: {
    background: "linear-gradient(135deg, #ef4444, #f59e0b)",
    color: "white",
    border: "none",
    padding: "12px 22px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "26px",
  },
 statCard: {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "24px",
  borderRadius: "22px",
  boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  transition: "all 0.3s ease",
  cursor: "pointer",
},
  cardLabel: {
    color: "#aebdd3",
  },
  cardValue: {
    color: "#ffffff",
  },
  chartBox: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "26px",
    borderRadius: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  },
  sectionTitle: {
    color: "#ffffff",
    marginBottom: "20px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  },
  rowCard: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "20px",
    borderRadius: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  },
  productImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "18px",
    marginBottom: "14px",
  },
  productTitle: {
    color: "#ffffff",
  },
  text: {
    color: "#cbd5e1",
  },
  price: {
    color: "#67e8f9",
  },
  actionButtons: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  editBtn: {
    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  deleteBtn: {
    background: "linear-gradient(135deg, #ef4444, #f59e0b)",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tableContainer: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "20px",
    overflowX: "auto",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    background: "rgba(6,182,212,0.14)",
    padding: "14px",
    textAlign: "left",
    color: "#e0f2fe",
  },
  td: {
    padding: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "#e5edf8",
  },
  statusPending: {
  background: "rgba(245,158,11,0.16)",
  color: "#fde68a",
  padding: "7px 13px",
  borderRadius: "20px",
  fontWeight: "bold",
},

statusConfirmed: {
  background: "rgba(34,197,94,0.16)",
  color: "#bbf7d0",
  padding: "7px 13px",
  borderRadius: "20px",
  fontWeight: "bold",
},

statusCancelled: {
  background: "rgba(239,68,68,0.16)",
  color: "#fecaca",
  padding: "7px 13px",
  borderRadius: "20px",
  fontWeight: "bold",
},

statusPaid: {
  background: "rgba(34,197,94,0.16)",
  color: "#bbf7d0",
  padding: "7px 13px",
  borderRadius: "20px",
  fontWeight: "bold",
},
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(3,7,18,0.68)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modalBox: {
    background: "#0b1730",
    width: "520px",
    maxWidth: "90%",
    borderRadius: "24px",
    padding: "25px",
    boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  formBox: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "24px",
    borderRadius: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "12px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.14)",
    outline: "none",
    color: "#ffffff",
    background: "rgba(3,7,18,0.5)",
  },
  searchInput: {
  width: "100%",
  padding: "14px 18px",
  marginBottom: "22px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.14)",
  outline: "none",
  color: "#ffffff",
  background: "rgba(3,7,18,0.55)",
  fontSize: "15px",
},
  

};

export default AdminDashboard;
