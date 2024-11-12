<template>
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo-container">
            <img src="../assets/signup-icon.png" alt="Sign Up" class="auth-logo" />
          </div>
          <h2>Crear una cuenta nueva</h2>
          <p class="auth-subtitle">Únete a nuestra comunidad</p>
        </div>
  
        <form @submit.prevent="handleSignUp" class="auth-form">
          <div class="form-group">
            <div class="input-icon">
              <i class="fas fa-envelope"></i>
              <input 
                type="email" 
                v-model="email" 
                placeholder="Correo electrónico"
                required
                class="form-input"
              />
            </div>
          </div>
  
          <div class="form-group">
            <div class="input-icon">
              <i class="fas fa-lock"></i>
              <input 
                type="password" 
                v-model="password" 
                placeholder="Contraseña"
                required
                class="form-input"
              />
              <small class="password-hint">Mínimo 6 caracteres</small>
            </div>
          </div>
  
          <div class="form-group">
            <div class="input-icon">
              <i class="fas fa-lock"></i>
              <input 
                type="password" 
                v-model="confirmPassword" 
                placeholder="Confirmar contraseña"
                required
                class="form-input"
              />
            </div>
          </div>
  
          <div class="terms-container">
            <label class="checkbox-container">
              <input type="checkbox" v-model="acceptTerms" required>
              <span class="checkmark"></span>
              <span class="terms-text">
                Acepto los <a href="#" class="terms-link">términos y condiciones</a>
              </span>
            </label>
          </div>
  
          <button type="submit" class="btn-signup" :disabled="loading || !acceptTerms">
            <span v-if="!loading">Crear cuenta</span>
            <span v-else class="spinner"></span>
          </button>
  
          <div v-if="error" class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            {{ error }}
          </div>
        </form>
  
        <div class="auth-footer">
          <p>¿Ya tienes una cuenta?</p>
          <router-link to="/login" class="login-link">
            Inicia sesión aquí
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #6B46C1 0%, #434190 100%);
    padding: 20px;
  }
  
  .auth-card {
    background: white;
    border-radius: 24px;
    padding: 40px;
    width: 100%;
    max-width: 460px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .logo-container {
    background: #EDF2F7;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
  
  .auth-logo {
    width: 40px;
    height: 40px;
  }
  
  .auth-header {
    text-align: center;
    margin-bottom: 35px;
  }
  
  .auth-header h2 {
    color: #2D3748;
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  .auth-subtitle {
    color: #718096;
    font-size: 16px;
  }
  
  .form-group {
    margin-bottom: 24px;
    position: relative;
  }
  
  .input-icon {
    position: relative;
  }
  
  .input-icon i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #A0AEC0;
    font-size: 18px;
  }
  
  .form-input {
    width: 100%;
    padding: 15px 15px 15px 50px;
    border: 2px solid #E2E8F0;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: #F7FAFC;
  }
  
  .form-input:focus {
    border-color: #6B46C1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.1);
    background: white;
  }
  
  .password-hint {
    position: absolute;
    right: 12px;
    bottom: -20px;
    font-size: 12px;
    color: #718096;
  }
  
  .terms-container {
    margin-bottom: 24px;
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #4A5568;
    gap: 8px;
  }
  
  .terms-link {
    color: #6B46C1;
    text-decoration: none;
  }
  
  .terms-link:hover {
    text-decoration: underline;
  }
  
  .btn-signup {
    width: 100%;
    padding: 15px;
    background: #6B46C1;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-signup:hover {
    background: #553C9A;
  }
  
  .btn-signup:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }
  
  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .error-message {
    margin-top: 16px;
    padding: 12px;
    background: #FFF5F5;
    color: #E53E3E;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  
  .auth-footer {
    text-align: center;
    margin-top: 30px;
    color: #718096;
  }
  
  .login-link {
    color: #6B46C1;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
  }
  
  .login-link:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 480px) {
    .auth-card {
      padding: 30px 20px;
    }
    
    .auth-header h2 {
      font-size: 24px;
    }
    
    .form-input {
      padding: 12px 12px 12px 45px;
    }
  }
  </style>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'SignUpView',
    setup() {
      const router = useRouter();
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const error = ref('');
      const loading = ref(false);
      const acceptTerms = ref(false);
  
      const handleSignUp = async () => {
        if (password.value !== confirmPassword.value) {
          error.value = 'Las contraseñas no coinciden';
          return;
        }
  
        if (password.value.length < 6) {
          error.value = 'La contraseña debe tener al menos 6 caracteres';
          return;
        }
  
        loading.value = true;
        error.value = '';
        
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          router.push('/');
        } catch (err) {
          switch (err.code) {
            case 'auth/email-already-in-use':
              error.value = 'Este correo electrónico ya está registrado';
              break;
            case 'auth/invalid-email':
              error.value = 'Correo electrónico inválido';
              break;
            default:
              error.value = 'Error al crear la cuenta. Por favor, inténtalo de nuevo';
          }
        } finally {
          loading.value = false;
        }
      };
  
      return {
        email,
        password,
        confirmPassword,
        error,
        loading,
        acceptTerms,
        handleSignUp
      };
    }
  };
  </script>