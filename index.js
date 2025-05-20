const myLink = 'https://leetcode-stats-api.herokuapp.com'

const textDisk1 = document.querySelector('.disk-1-text')
const textDisk2 = document.querySelector('.disk-2-text')
const textDisk3 = document.querySelector('.disk-3-text')


const form = document.getElementById('user-form');
const textInput = document.getElementById('text-input');

form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // Stop form from reloading the page

    const userName = textInput.value.trim(); // Get input value
    console.log(userName); // Log the actual text entered

    setData(myLink + '/'+ userName)
});

async function getData(link) {
    try {
        console.log('Op started')
        console.log(link)
        const data = await fetch(link)

        const dataParsed = await data.json()
        console.log(dataParsed)
        return dataParsed
    } catch (e) {
        console.log('fetch error' + e)
        return null
    }
}



textDisk1.textContent = 'Loading...';
textDisk2.textContent = 'Loading...';
textDisk3.textContent = 'Loading...';




function setData(link) {
    setTimeout(() => {
        getData(link)
            .then((data) => {
                //  = data.
                textDisk1.textContent = data.easySolved + '/' + data.totalEasy
                textDisk2.textContent = data.mediumSolved + '/' + data.totalHard
                textDisk3.textContent = data.hardSolved + '/' + data.totalMedium
            })
            .catch((err) => {
                console.log('Rejected: ' + err)
            })
            .finally(() => {
                console.log('Done data update')
            })
    }, 0)
}