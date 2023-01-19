const btn = document.getElementById('btn-new');
btn.addEventListener('click', async (e) =>{
    e.preventDefault();
    try {
        const r = await fetch(`https://api.nasa.gov/planetary/apod?api_key=eVGZYY1PJ0pPIvcEKIBkoXNBwKMRQxJ0263g5azj&count=1&hd=true`);
        const jsonBody = await r.json();
        
        if(r.status === 200){
            showResults({
                date: jsonBody[0].date,
                explanation: jsonBody[0].explanation,
                title: jsonBody[0].title,
                url: jsonBody[0].url,
                hdurl: jsonBody[0].hdurl
            })
        }
    } catch (e) {
        console.log(e);
    }
});

function showResults(obj) {
    document.querySelector('.gl-text').innerHTML = obj.explanation;
    document.querySelector('.gl-tittle').innerHTML = obj.title;
    document.querySelector('.gl-img').setAttribute('src',`${obj.url}`);
    document.querySelector('.gl-img').setAttribute('srcset',`${obj.hdurl}`)
};

