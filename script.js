const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});items.forEach(el=>observer.observe(el));}else{items.forEach(el=>el.classList.add('visible'));}
