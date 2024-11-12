<template>
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <img src="../assets/logo.png" alt="Logo" class="auth-logo" />
          <h2>Bienvenido de nuevo</h2>
          <p class="auth-subtitle">Ingresa tus credenciales para continuar</p>
        </div>
  
        <form @submit.prevent="handleLogin" class="auth-form">
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
            </div>
          </div>
  
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe">
              Recordarme
            </label>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
  
          <button type="submit" class="btn-login" :disabled="loading">
            <span v-if="!loading">Iniciar Sesión</span>
            <span v-else class="spinner"></span>
          </button>
  
          <div v-if="error" class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            {{ error }}
          </div>
        </form>
  
        <div class="auth-footer">
          <p>¿No tienes una cuenta?</p>
          <router-link to="/signup" class="signup-link">
            Regístrate aquí
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
  }
  
  .auth-card {
    background: white;
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .auth-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .auth-logo {
    width: 80px;
    margin-bottom: 20px;
  }
  
  .auth-header h2 {
    color: #2d3748;
    font-size: 24px;
    margin-bottom: 8px;
  }
  
  .auth-subtitle {
    color: #718096;
    font-size: 16px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .input-icon {
    position: relative;
  }
  
  .input-icon i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #a0aec0;
  }
  
  .form-input {
    width: 100%;
    padding: 12px 15px 12px 45px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #718096;
  }
  
  .forgot-password {
    color: #667eea;
    text-decoration: none;
    font-size: 14px;
  }
  
  .btn-login {
    width: 100%;
    padding: 12px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-login:hover {
    background: #5a67d8;
  }
  
  .btn-login:disabled {
    background: #a0aec0;
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
    margin-top: 15px;
    padding: 10px;
    background: #fff5f5;
    color: #e53e3e;
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
  
  .signup-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 480px) {
    .auth-card {
      padding: 30px 20px;
    }
  }
  </style>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'LoginView',
    setup() {
      const router = useRouter();
      const email = ref('');
      const password = ref('');
      const error = ref('');
      const loading = ref(false);
      const rememberMe = ref(false);
  
      const handleLogin = async () => {
        loading.value = true;
        error.value = '';
        
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/');
        } catch (err) {
          error.value = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        } finally {
          loading.value = false;
        }
      };
  
      return {
        email,
        password,
        error,
        loading,
        rememberMe,
        handleLogin
      };
    }
  };
  </script>