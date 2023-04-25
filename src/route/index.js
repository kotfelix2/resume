// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяць',

  address: 'Kyiv city, the main street, 1',
};

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
};
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
   
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team 
        player, every colleague is a friend to me.`,
      },
  
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( 
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
   
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VS Code',
          point: 9,
        },
        {
          name: 'Git',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 7,
          isTop: false,
        },
        {
          name: 'ReactJS',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: 0,
        },
      ],
      hobbies: [
        {
          name: 'AI tools',
          isMain: true,
        },
        {
          name: 'Robots',
          isMain: true,
        },
        {
          name: 'Play piano',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
   
    header,

    main: {
      educations: [
        {
          name: "First",
          isEnd: true,
        },
        {
          name: "Secondary",
          isEnd: true,
        },
        {
          name: "High",
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Good boy 2020',
          id: 136,
        },
        {
          name: 'Super brain 2021',
          id: 158,
        },
        {
          name: 'Busy man 2022',
          id: 147,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
   
    header,

    main: {
      works: [
        {
          position: "Junior Fullstack developer",
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,
        },
        {
          position: "Middle Fullstack developer",
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '23.03.2023',
            to: null,
          },

          projectAmount: 1,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Create resume',
              stackAmount: 3,
              stack: [
                {
                  name: 'ReactJS',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'NodeJS',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Good paper',
                },
                {
                  name: 'Practical skills in coding',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
