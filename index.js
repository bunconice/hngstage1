document.addEventListener('DOMContentLoaded', () => {
  const updateTime = () => {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const day = now.toLocaleString('en-US', { weekday: 'long' });
      
      document.querySelector('.current-time').textContent = utcTime;
      document.querySelector(".current-day").textContent = day;
  };

  updateTime();
  setInterval(updateTime, 1000);
});
