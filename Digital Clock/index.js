const hr = document.querySelector('.hr');
        const mn = document.querySelector('.mn');
        const sc = document.querySelector('.sc');
        const am = document.querySelector('.am');

        function updateTime() {
            const date = new Date();
            let hour = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            let ampm = 'AM';

            if (hour >= 12) {
                ampm = 'PM';
                if (hour > 12) {
                    hour -= 12;
                }
            }

            hr.textContent = String(hour).padStart(2, '0');
            mn.textContent = String(min).padStart(2, '0');
            sc.textContent = String(sec).padStart(2, '0');
            am.textContent = ampm;
        }

        setInterval(updateTime, 1000);
        updateTime(); 