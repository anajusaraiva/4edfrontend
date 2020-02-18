$.ajax({
    method: "get",
    url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=287350627.1677ed0.4c5c86e9a35441f6a295c237f87a02ee",
    success: function(response) {
        console.log (response.data[0].images.standard_resolution.url);
        
        const posts = response.data;

        const galeria = $('.galeria');

        posts.forEach(element => {
           console.log(element);
           
           galeria.append(`<a href="${element.link}" target="_blank"><img src="${element.images.standard_resolution.url}"> <p> <i class="material-icons">
           favorite </i> ${element.likes.count} </p></a>`);
        });

       

 
    }
})



