import { defineStore } from 'pinia';
import { useContactRepository } from '@/api/repositories/contactRepository';

export const useContactStore = defineStore('contact', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      service: '',
      message: ''
    },
    errors: {},
    isLoading: false,
    isSuccess: false,
    serverError: null
  }),
  actions: {
    async submitForm() {
      this.isSuccess = false;
      this.serverError = null;

      // ✅ Run client-side validation first
      const isValid = this.validateForm();
      if (!isValid) return;

      this.isLoading = true;
      try {
        const contactRepo = useContactRepository();
        await contactRepo.submitContactForm(this.formData);
        this.isSuccess = true;
        this.resetForm();
      } catch (error) {
        this.handleError(error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    validateForm() {
      const errors = {};

      if (!this.formData.name.trim()) {
        errors.name = 'Name is required.';
      }

      if (!this.formData.email.trim()) {
        errors.email = 'Email is required.';
      } else if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
        errors.email = 'Invalid email format.';
      }

      if (!this.formData.service) {
        errors.service = 'Please select a service.';
      }

      if (!this.formData.message.trim()) {
        errors.message = 'Message is required.';
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        service: '',
        message: ''
      };
      this.errors = {};
      this.isSuccess = false;
      this.serverError = null;
    },
    handleError(error) {
      if (error.response?.status === 422) {
        this.errors = error.response.data.errors || {};
      } else {
        this.serverError = error.message || 'Failed to submit form. Please try again.';
      }
    }
  }
});