exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, email: 'bobby.turner@test.com', first_name: 'Bobby', last_name: 'Turner', bio: "Hi there, I'm Bobby, I live in Auckland, NZ and I work as a Chartered Accountant. In my spare time I love to travel and immerse myself in other cultures. I'm currently planning my next trip to Europe, spending a couple of months in France, so I'm looking to learn some French! I am almost fluent in German, so I'd love to offer my skills to teach German and of course I can also offer my expertise in Accounting. I look forward to hearing from any other skillHub users!", photo_url: '/profiles/BobbyTurner.jpg', location_city: 'Auckland', auth_id: 'auth0|5948e181b619ce2097201dbf'},

        {id: 2, user_id: 2, email: 'anton.barnett@test.com', first_name: 'Anton', last_name: 'Barnett', bio: "Hello, I'm Anton. I'm 21 and I live in Auckland. I've just graduated from Auckland University after studying a Bachelor of Arts, and I'm looking for a job so I'd love to connect with someone to help me write a CV and polish my interviewing skills. In return I can offer to teach anyone who is interested in learning German or French, which I am fluent in. Contact me if you're interested!", photo_url: '/profiles/AntonBarnett.jpg', location_city: 'Auckland', auth_id: 'auth0|5948e2a6c3954a4865ef934c'},

        {id: 3, user_id: 3, email: 'michael.matthews@test.com', first_name: 'Michael', last_name: 'Matthews', bio: "Hi, I'm Mike, I've been working in the film industry for over 10 years and my passion is making short films. I would like to make my own Wordpress site so I'm looking for someone to teach me those skills. I would love to pass on some knowledge to any budding kiwi film makers - I can even show you how to film with drones! I think this is a great way to connect!", photo_url: '/profiles/MichaelMatthews.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e2cfc3954a4865ef934e'},

        {id: 4, user_id: 4, email: 'laura.butler@test.com', first_name: 'Laura', last_name: 'Butler', bio: "Hey, I'm Laura, I'm 24 and I live in Auckland. I am a personal assistant by day but my passion is singing! I have been singing since I was three and I have recorded a few of my own songs. I'd love to give back to the community and assist anyone keen to learn to sing! I'd love to learn some great baking skills - in particular making a great pavlova and also how to make good dumplings. If anyone is keen to teach me, please let me know. I'm also a keen basket weaver so I can teach that too. I look forward to hearing from you.", photo_url: '/profiles/LauraButler.jpg', location_city: 'Auckland', auth_id:'auth0|5948e2f2c3954a4865ef9350'},

        {id: 5, user_id: 5, email: 'nicole.brown@test.com', first_name: 'Nicole', last_name: 'Brown', bio: "Hello, I'm Nicole and I have been living in NZ for 2 years since I moved from France after marrying my kiwi husband. I work a boutique pottery store in Auckland. Ive been making pottery since I was little, and it's a really fun skill to have - if anyone is interested in learning, please contact me. I am free most Saturday afternoons and we can actually use the studio at my work for a lesson. I can also teach French (possibly combining the two at once!). In return I am looking for someone in Auckland who can provide singing lessions.", photo_url: '/profiles/NicoleBrown.jpg', location_city: 'Auckland', auth_id: 'auth0|5948e30bc3954a4865ef9352'},

        {id: 6, user_id: 6, email: 'veronica.moore@test.com', first_name: 'Veronica', last_name: 'Moore', bio: "I'm Veronica, I'm 26 and I am a Wordpress developer for a local company here in Wellington. In my spare time I like to train for marathons, I'm currently training for the next marathon in Boston, USA. I am interested in learning about photography and short films if there is anyone who is interested in teaching me. I would like to offer my expertise in Wordpress. Also I could also offer my skills as a running coach. Look forward to hearing from you!", photo_url: '/profiles/VeronicaMoore.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e322c3954a4865ef9354'},

        {id: 7, user_id: 7, email: 'frank.rice@test.com', first_name: 'Frank', last_name: 'Rice', bio: "Hello, I'm Frank, I would like to learn some basic French and German before my trip to Europe next year. I work as an Accountant and like to help start ups in my spare time with basic accounting setups etc. So I's like to offer out my skills in that area. If you are interested, please contact me through skillHub", photo_url: '/profiles/FrankRice.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e336c3954a4865ef9356'},

        {id: 8, user_id: 8, email: 'emily.riley@test.com', first_name: 'Emily', last_name: 'Riley', bio: "Hi skillHubbers, I'm Emily and I live in Wellington. I have always wanted to learn guitar but learning from online tutorials is too hard for me. I am looking for someone who can teach me to play some basic songs on guitar. I'd also like to get some singing lessons! In my spare time I love to bake and my specialty is making pavlovas and other desserts. I can offer my skills to anyone looking to learn to bake, I have a huge kitchen and would be happy to bake here if you bring the ingredients! I also really love to run and coach a group of local runners every Saturday morning, so I can also offer my skills as a running coach. Look forward to hearing from you!", photo_url: '/profiles/EmilyRiley.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e34dc3954a4865ef935'},

        {id: 9, user_id: 9, email: 'olivia.rodgers@test.com', first_name: 'Olivia', last_name: 'Rodgers', bio: "Hello, I'm Olivia and I am a Junior Web Developer, mainly coding in Javascript. Coding is a great skill to learn so I would like to offer my expertise to teach basic Javascript! In return I would like to find others with woodworking or pottery skills as I would love to learn how to make small gifts for friends and family. Please send me a message if you are interested in teaching me or learning from me!", photo_url: '/profiles/OliviaRodgers.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e361c3954a4865ef935a'},

        {id: 10, user_id: 10, email: 'derek.nolan@test.com', first_name: 'Derek', last_name: 'Nolan', bio: "Hi, I'm Derek - I am a budding web developer looking for some help with Javascript. I have a great app idea in mind that I would like to start building, so I also need some help from someone with experience in helping startups, especially with the money side! I studied Chemistry through to Year 13 in high school, so I could offer my skills to any high school students looking for some help in that area.", photo_url: '/profiles/DerekNolan.jpg', location_city: 'Wellington', auth_id: 'auth0|5948e377c3954a4865ef935c'},

        {id: 11, user_id: 11, email: 'shannon.price@test.com', first_name: 'Shannon', last_name: 'Price', bio: "Hi there, I'm Shannon, I live in Wellington, NZ and I work as a web developer. In my spare time I love to travel and immerse myself in other cultures. I'm currently planning my next trip to Europe, spending a couple of months in Germany, so I'm looking to learn some German and also maybe french! I am very experienced in Javascript, so I'd love to offer my skills to teach Javascript. I can also teach Photography. I look forward to hearing from any other skillHub users!", photo_url: '/profiles/ShannonPrice.jpg', location_city: 'Wellington', auth_id: ''},

        {id: 12, user_id: 12, email: 'amy.williams@test.com', first_name: 'Amy', last_name: 'Williams', bio: "Hi skillHubbers, I'm Amy and I live in Auckland. I have always wanted to learn guitar but learning from online tutorials is too hard for me. I am looking for someone who can teach me a few songs. I'd also like to get some photography lessons! In my spare time I love to make things and my specialty is making wooden photo frames and ceramic pottery. I can offer my skills to anyone looking to learn woodwork or pottery, I would be happy to do the lessons here at my home if you bring the materials!", photo_url: '/profiles/AmyWilliams.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 14, user_id: 14, email: 'lauren.jeffries@test.com', first_name: 'Lauren', last_name: 'Jeffries', bio: "Hi there, I'm Lauren, I live in Auckland, NZ. In my spare time I love to dabble in photography, so I'd love to offer my skills to teach this and I can also offer my expertise in German conversation skills. I look forward to hearing from any other skillHub users! In return I would like to learn to paint, and I'd also be interested in woodwork lessons", photo_url: '/profiles/LaurenJeffries.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 15, user_id: 15, email: 'sara.goodwin@test.com', first_name: 'Sara', last_name: 'Goodwin', bio: "Hello!", photo_url: '/profiles/SaraGoodwin.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 16, user_id: 16, email: 'madison.young@test.com', first_name: 'Madison', last_name: 'Young', bio: "Hello!", photo_url: '/profiles/MadisonYoung.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 17, user_id: 17, email: 'tiffany.baker@test.com', first_name: 'Tiffany', last_name: 'Baker', bio: "Hello!", photo_url: '/profiles/TiffanyBaker.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 18, user_id: 18, email: 'emma.harris@test.com', first_name: 'Emma', last_name: 'Harris', bio: "Hello!", photo_url: '/profiles/EmmaHarris.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 19, user_id: 19, email: 'michelle.banks@test.com', first_name: 'Michelle', last_name: 'Banks', bio: "Hello!", photo_url: '/profiles/MichelleBanks.jpg', location_city: 'Hamilton', auth_id: ''},

        {id: 20, user_id: 20, email: 'clara.collins@test.com', first_name: 'Clara', last_name: 'Collins', bio: "Hello!", photo_url: '/profiles/ClaraCollins.jpg', location_city: 'Hamilton', auth_id: ''},

        {id: 21, user_id: 21, email: 'jeremy.stewart@test.com', first_name: 'Jeremy', last_name: 'Stewart', bio: "Hello!", photo_url: '/profiles/JeremyStewart.jpg', location_city: 'Hamilton', auth_id: ''},

        {id: 22, user_id: 22, email: 'joel.king@test.com', first_name: 'Joel', last_name: 'King', bio: "Hello!", photo_url: '/profiles/JoelKing.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 23, user_id: 23, email: 'tom.mccoy@test.com', first_name: 'Tom', last_name: 'McCoy', bio: "Hello!", photo_url: '/profiles/TomMcCoy.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 24, user_id: 24, email: 'evan.cooper@test.com', first_name: 'Evan', last_name: 'Cooper', bio: "Hello!", photo_url: '/profiles/EvanCooper.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 25, user_id: 25, email: 'david.james@test.com', first_name: 'David', last_name: 'James', bio: "Hello!", photo_url: '/profiles/DavidJames.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 26, user_id: 26, email: 'gabriel.riley@test.com', first_name: 'Gabriel', last_name: 'Riley', bio: "Hello!", photo_url: '/profiles/GabrielRiley.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 27, user_id: 27, email: 'finn.parker@test.com', first_name: 'Finn', last_name: 'Parker', bio: "Hello!", photo_url: '/profiles/FinnParker.jpg', location_city: 'Auckland', auth_id: ''},

        {id: 28, user_id: 28, email: 'lucas.murray@test.com', first_name: 'Lucas', last_name: 'Murray', bio: "Hello!", photo_url: '/profiles/LucasMurray.jpg', location_city: 'Wellington', auth_id: ''},

        {id: 29, user_id: 29, email: 'aaron.hart@test.com', first_name: 'Aaron', last_name: 'hart', bio: "Hello!", photo_url: '/profiles/AaronHart.jpg', location_city: 'Wellington', auth_id: ''},

        {id: 30, user_id: 30, email: 'johnny.peterson@test.com', first_name: 'Johnny', last_name: 'Peterson', bio: "Hello!", photo_url: '/profiles/JohnnyPeterson.jpg', location_city: 'Wellington', auth_id: ''},
      ])
    })
}
