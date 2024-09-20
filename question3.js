db.sales.aggregate([
  { $unwind: "$items" },
  {
    $addFields: {
      totalItemRevenue: { $multiply: ["$items.quantity", "$items.price"] },
      month: { $dateToString: { format: "%Y-%m", date: "$date" } },
    },
  },
  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: { $sum: "$totalItemRevenue" },
      averagePrice: { $avg: "$items.price" },
    },
  },
  {
    $project: {
      _id: 1,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1,
    },
  },
  { $sort: { store: 1, month: 1 } },
]);

// json: [
//   {
//     store: "Store A",

//     month: "2024-06",

//     totalRevenue: 230.0,

//     averagePrice: 15.0,
//   },

//   {
//     store: "Store B",

//     month: "2024-06",

//     totalRevenue: 150.0,

//     averagePrice: 12.5,
//   },
// ];
