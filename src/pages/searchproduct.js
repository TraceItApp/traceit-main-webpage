import React, { useState } from "react";
import { supabaseClient } from "./supabaseClient";

function ProductSearch() {
  const [productId, setProductId] = useState(""); // Create a state variable for the product ID
  const [supabaseResult, setSupabaseResult] = useState(""); // Create a state variable for the product ID

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
    // console.log("Product ID:", productId); // For now, just log the product ID
    // Here, you can add code to call the function that searches for the product using Supabase.
    const { data, error } = await supabaseClient
      .from("gapwomen")
      .select("fabric")
      .eq("ProductID", productId);
    if (error) {
      console.error(error);
      return;
    }
    let resultString = "";
    for (let row of data) resultString = resultString + " " + row.fabric;
    setSupabaseResult(resultString);
  };

  return (
    <div>
      <h1>Enter product ID</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>

        <button type="submit">Search Product</button>
      </form>
      {supabaseResult}
    </div>
  );
}

export default ProductSearch;
