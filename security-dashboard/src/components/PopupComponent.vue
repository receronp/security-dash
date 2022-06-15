<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <button
        type="button"
        class="btn btn-secondary popup-close"
        @click="TogglePopup()"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: ["TogglePopup"],
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  .popup-inner {
    text-align: center;
    background: #fff;
    padding: 32px;

    height: auto;
    width: 30rem;
  }
}
</style>
