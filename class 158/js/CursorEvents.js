AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    
  },

  handlePlacesListEnter: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["super-man-comics", "spider-man-comics", "iron-man-comics", "flash-comics"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListEnter();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
       this.handlePlacesListLeave();
    });
  },
  handlePlacesListLeave: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["super-man-comics", "spider-man-comics", "iron-man-comics", "flash-comics"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
    }
  },

});
