// Client Section - Generate Cards
let logoData = [
{ url: './images/partner1.png', name: 'Brenntag_Group', altText: 'Brenntag Logo', link: 'https://www.brenntag.com/'},
{ url: './images/partner2.png', name: 'Amines_and_Plasticizers_Limited', altText: 'Amines and Plasticizers Logo', link: 'http://www.amines.com/'}
];

let htmlstr = "";


logoData.map(item => {
    console.log(item)
htmlstr += `<a href=${item.link} target="_blank" class='SW24-01-card'>
<div class='SW24-01-img-cover'>
<img class='SW24-01-img' title=${item.name} src=${item.url} alt=${item.altText}>
</div>
</a> `
});

$('.SW24-01-cards-wrapper').html(htmlstr);
