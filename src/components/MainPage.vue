<template>
  <body>
    <header>
      <h1>Auction-Bids website</h1>
    </header>

    <nav>
      <div>
        <a href="#">Home</a>
        <a href="#">Auction-Details</a>
      </div>
      <div>
        <a href="#">Sign In</a>
      </div>
    </nav>

    <div>
      <div class="item-card" v-for="item in auctions" :key="item.id">
        <h1>{{ item.name }}</h1>
        <img :src="item.imageName" alt="" />
        <h3>Price is : {{ item.price }}$</h3>
        <button class="detailBtn">
          <router-link to="/auction-details">More Detail</router-link>
        </button>
      </div>
    </div>

    <!-- Your website content goes here -->
  </body>
</template>

<script>
import "../style.css";
import auctions from "../temp-data";

export default {
  data() {
    return {
      auctions,
    };
  },
};
</script>
