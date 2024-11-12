<template>
    <div class="home-container">
      <header class="home-header">
        <h1>Bienvenido, {{ userEmail }}</h1>
        <button @click="handleLogout" class="btn btn-secondary">
          {{ loading ? 'Cerrando sesión...' : 'Cerrar sesión' }}
        </button>
      </header>
  
      <main class="home-content">
        <div class="welcome-card">
          <h2>¡Inicio de sesión exitoso!</h2>
          <p>Has accedido correctamente a la zona privada de la aplicación.</p>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { signOut } from 'firebase/auth';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'HomeView',
    setup() {
      const router = useRouter();
      const userEmail = ref('');
      const loading = ref(false);
  
      onMounted(() => {
        userEmail.value = auth.currentUser?.email || '';
      });
  
      const handleLogout = async () => {
        loading.value = true;
        try {
          await signOut(auth);
          router.push('/login');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        } finally {
          loading.value = false;
        }
      };
  
      return {
        userEmail,
        loading,
        handleLogout
      };
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .home-header h1 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-color);
  }
  
  .welcome-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .welcome-card h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  .welcome-card p {
    color: var(--text-color);
    line-height: 1.6;
  }
  </style>