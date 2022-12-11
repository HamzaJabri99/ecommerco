import mongoose from "mongoose";
const ProductStatSchema = new mongoose.Schema({
  productId: String,
  yearySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: [
    {
      month: String,
      totalSales: Number,
      totalUnits: Number,
    },
  ],
  dailyData: {
    data: String,
    totalSales: Number,
    totalUnits: Number,
  },
});
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
