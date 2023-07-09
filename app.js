let pronouns = ['the', 'our', 'my', 'your']
let adjs = ['awesome', 'amazing', 'great']
let nouns = ['car', 'surf', 'whale']
let extensions = ['.com', '.net', '.io']



const generateUrls = () => {
    const urls = []
    for (let pronoun of pronouns) {
        for (let adj of adjs) {
            for (let noun of nouns) {
                for (let extension of extensions) {
                    urls.push(`${pronoun}${adj}${noun}${extension}`)
                }
            }
        }
    }
    return urls.join("<br/>")
}

const btn = document.querySelector('#btn')
const list = document.querySelector('#domainList')

btn.addEventListener('click', () => {
    const urlList = document.createElement("p")
    urlList.innerHTML = generateUrls()
    list.appendChild(urlList)
})