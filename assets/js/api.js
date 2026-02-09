async function fetchProfileData(){
    const url = 'https://github.com/alexandrefnas/portifolio/blob/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()

}