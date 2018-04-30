var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var data = [
    {
        name: "Bublba",
        image: "https://wgp-cdn.co.uk/OAL/jpg/imports_2-bubble-tent-2-_35173/300/300/",
        description: "proooc jen nahodny picoviny jezisimarjaaaa byla to pohoda jahoda 😏 Amo doufam ze nemas trauma jezisimarjaaaa och tady si nepomahame já si chci hrát s balonkama abych tu pohanku dokouřil tady si nepomahame promiň hanko abych tu pohanku dokouřil och kdyz nemate kamarady.. and staaaaaaaaahp it jo a ta svatba by mohla být na hristi já budu plakat byla to pohoda jahoda 😏 je to moc tezkyyyyyyyy jo joooooooo Kalivoda bude Elišky táta"
    },
    {
        name: "Bublba",
        image: "https://wgp-cdn.co.uk/OAL/jpg/imports_2-bubble-tent-2-_35173/300/300/",
        description: "ale aspon to funguje bud omyl nebo umira chtela zavolat pomoc tady si nepomahame och proooc jen nahodny picoviny promiň hanko ale aspon to funguje hele jako hrupky nemám nigte takse jakoooo jo a ta svatba by mohla být na hristi jo a ta svatba by mohla být na hristi Zítra možná písem matiku Antonmaria di Noldo Gherardini jezisimarjaaaa jezisimarjaaaa hele jako hrupky nemám nigte takse jakoooo tady si nepomahame ja te zabiju amelie... já si chci hrát s balonkama je to moc tezkyyyyyyyy Antonmaria di Noldo Gherardini"
    },
    {
        name: "Bublba",
        image: "https://wgp-cdn.co.uk/OAL/jpg/imports_2-bubble-tent-2-_35173/300/300/",
        description: "hele jako hrupky nemám nigte takse jakoooo and staaaaaaaaahp it já si chci hrát s balonkama kdyz nemate kamarady.. je to hnusny ale aspon to funguje ryma, teplota, boli me hlava. nic extra abych tu pohanku dokouřil já budu plakat bud omyl nebo umira chtela zavolat pomoc je to moc tezkyyyyyyyy abych tu pohanku dokouřil Zítra možná písem matiku kdyz nemate kamarady.. za chvilkuuu a prestan s tim Sherlockem jo a mažu beton a dám tam lenochoda Zítra možná písem matiku proc ste to delali aha tak to ses tu spatne amo tady si nepomahame tady si nepomahame"
    }
];

data.push({
    name: "ME",
    image: "https://i.pinimg.com/originals/c9/95/b3/c995b31b099b1a27a3360d2e18d683e7.jpg",
    description: "Me when I came to the conclusion that i can't code."
});

function seedDB(){
    // Remove campgrounds
    Campground.remove({}, function(err){
        // if(err) {
        //     console.log("fail");
        // } else {
        //     console.log("rhubarb");
        //     data.forEach(function (seed) {
        //         Campground.create(seed, function (err, campground) {
        //             if (err) {
        //                 console.log("fail");
        //             } else {
        //                 // comment
        //                 Comment.create(
        //                     {
        //                         text: "It looks pretty dope",
        //                         author: "Edgyfaggot xX69Xx"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log("fail");
        //                         } else {
        //                             // yes, I do wanna die btw
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                         }
        //                     }
        //                 )
        //             }})
        //     });
        // }
    });
}

module.exports = seedDB;