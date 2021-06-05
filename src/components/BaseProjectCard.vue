<template>
  <div class="base-project-card">
    <BaseCodeView
      :background-color="project.color"
      :code="project.code"
      :language="project.language"
      highlight
      minified
    />

    <div class="base-project-card__content">
      <router-link class="base-project-card__title" :to="projectLink">
        {{ project.name }}
      </router-link>

      <p class="base-project-card__description">{{ project.description }}</p>
    </div>

    <div class="base-project-card__footer">
      <div class="base-project-card__actions">
        <button class="base-project-card__action">
          <BaseIcon icon="comment" />
          <span>{{ comments }}</span>
        </button>

        <button
          class="base-project-card__action"
          :class="{ 'base-project-card__action--red': isFavorited }"
        >
          <BaseIcon icon="heart" />
          <span>{{ hearts }}</span>
        </button>
      </div>

      <BaseProfile :user="user" />
    </div>
  </div>
</template>

<script>
import BaseCodeView from "./BaseCodeView.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseProfile from "./BaseProfile.vue";

export default {
  name: "BaseProjectCard",

  components: { BaseCodeView, BaseIcon, BaseProfile },

  props: {
    project: {
      type: Object,
      default: () => ({}),
    },

    minified: Boolean,
  },

  computed: {
    isFavorited() {
      return false;
    },

    projectLink() {
      return {
        name: "ProjectDetail",
        params: {
          id: this.project.id || "",
        },
      };
    },

    comments() {
      return this.project.comments.length;
    },

    hearts() {
      return this.project.hearts.length;
    },

    user() {
      return this.project.user || {};
    },
  },
};
</script>

<style lang="scss">
.base-project-card {
  max-width: 52rem;
  background-color: rgba(0, 0, 0, 0.16);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  .base-code-view {
    max-width: 100%;
  }

  &__content {
    padding: 2.4rem;
    color: var(--white);
  }

  &__footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 2.4rem 2.4rem;
  }

  &__title {
    display: block;
    font-size: 2.1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 1.6rem;
    opacity: 0.8;
  }

  &__action {
    border-radius: 1.6rem;
    color: var(--white);
    display: inline-flex;
    padding: 1rem;

    span {
      margin-left: 1rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.16);
    }

    &--red .base-icon {
      color: var(--red);
    }
  }

  .base-profile {
    background-color: transparent;

    &:hover {
      background-color: var(--dark-blue);
    }
  }
}
</style>
