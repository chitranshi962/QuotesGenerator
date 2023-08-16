const quotes = [
       {

        current : 1
       },
       {
           quote: "The only way to do great work is to love what you do.",
           author: "Steve Jobs",
           image: "images.jpg"
       },
       
       {
           quote: "Innovation distinguishes between a leader and a follower.",
           author: "Steve Jobs",
           image: "images.jpg"
       },
       {
           quote: "And now that you don't have to be perfect, you can be good.",
           author: "John Steinbeck",
           image: "image3.jpg"
       },
       {      
           quote:"Life isn’t about getting and having, it’s about giving and being.",
           author:"Kevin Kruse",
           image: "download.jpg"
       },
       {
           quote:"The question isn’t who is going to let me; it’s who is going to stop me.",
           author:"Ayn Rand",
           image: "image4.jpg"},
       {
           quote:"Life is what we make it, always has been, always will be.",
           author:"Grandma Moses",
           image: "image5.jpg"
       },
   
      {
           quote:"You may be disappointed if you fail, but you are doomed if you don’t try.",
           author:"Beverly Sills",
           image: "image6.jpg"
       },
   
       {
           quote:"If you do what you’ve always done, you’ll get what you’ve always gotten.",
            author:"Tony Robbins",
           image: "main.jpg"
           },
   
      {
           quote:"Do what you can, where you are, with what you have.",
           author:"Teddy Roosevelt",
       image: "image8.jpg"
       },
   
       {
        quote:"Dream big and dare to fail.",
        author:"Norman Vaughan",
       image: "image9.jpg"
       },    
   
        {
           quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
           author:"Dalai Lama",
           image: "image10.jpg"
       },
           
           {
               quote:"Education costs money.  But then so does ignorance.",
               author:"Sir Claus Moser",
               image: "image11.jpg"
           },
               
               {
                   quote:"Build your own dreams, or someone else will hire you to build theirs.",
                   author:"Farrah Gray",
                   image: "image12.jpg"
               },    
                   
                   {
                       quote:"You become what you believe.",
                       author:"Oprah Winfrey",
                       image: "try.jpg"
                   }        
   ];
   
   const quoteElement = document.getElementById('quote');
   const authorImageElement = document.getElementById('author-image');
   const authorNameElement = document.getElementById('author-name');
   const generateBtn = document.getElementById('generate-btn');
   
   generateBtn.addEventListener('click', generateQuote);
   let randomindex = 1;
   
   function generateQuote() {
       let index = quotes[0].current
       const randomQuote = quotes[index];
   
       quoteElement.textContent = randomQuote.quote;
       authorNameElement.textContent = randomQuote.author;
       authorImageElement.src = randomQuote.image;
       quotes[0].current = quotes[0].current+1;
       if (quotes[0].current >10){
        quotes[0].current = 1
       }
   }
   
   // Initial quote generation
   generateQuote();
   
   
   