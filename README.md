<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](https://github.com/aliShouman0/on-your-way#-project-philosophy) • [WIREFRAMES](https://github.com/aliShouman0/on-your-way#-wireframes) • [TECH STACK](https://github.com/aliShouman0/on-your-way#-tech-stack) • [IMPLEMENTATION](https://github.com/aliShouman0/on-your-way#-impplementation) • [HOW TO RUN?](https://github.com/aliShouman0/on-your-way#-how-to-run)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> The Idea is that anyone who is going from one city to another by car or even public transportation can pick up orders from other customers in the apps. "Customer" refers to the person who is using the app and needs to receive an order at the exact location as the delivery person is going to.
>
> At least some of the delivery person's transportation costs can be recovered from the customer, "they can negotiate about it or do it for free as a favor."

### User Stories

- As a user, I want to receive my order fast, so that I can test it without waiting a lot
- As a user, I want to get more income, so that I can save money
- As a user, I want to benefit my time and help people, so that I can feel better

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Login                              | SignUp                               | Next                                     |
| ---------------------------------- | ------------------------------------ | ---------------------------------------- |
| ![Login](./readme/figma/Login.jpg) | ![SignUp](./readme/figma/Signup.jpg) | ![SignUp](./readme/figma/NextSignup.jpg) |

| MyOrder                                        | Add order                                       | Order                                        |
| ---------------------------------------------- | ----------------------------------------------- | -------------------------------------------- |
| ![Artists results](./readme/figma/MyOrder.jpg) | ![Artist's Albums](./readme/figma/AddOrder.jpg) | ![Artist's Albums](./readme/figma/Order.jpg) |

| Chat                                        | In Chat                                       | Account                                        |
| ------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| ![Artists results](./readme/figma/Chat.jpg) | ![Artist's Albums](./readme/figma/InChat.jpg) | ![Artist's Albums](./readme/figma/Account.jpg) |

> Bottom Sheet

| cancel order                                       | Received order                                       | Order Completed                                       | Order Details                                         |
| -------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| ![Artists results](./readme/figma/CancelOrder.jpg) | ![Artist's Albums](./readme/figma/ReceivedOrder.jpg) | ![Artist's Albums](./readme/figma/OrderCompleted.jpg) | ![Artist's Albums](./readme/figma/MyOrderDetails.jpg) |

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the On Your Way app uses:

- This project uses the [React Native app development framework](https://reactnative.dev/). React Native is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For Admin user we have a [Desktop Application using Electron JS](https://www.electronjs.org/). Electron JS is a runtime framework that allows the user to create desktop applications with HTML5, CSS, and JavaScript.
- In parallel with Electron JS for admin, this project uses [React JS](https://reactjs.org/) for the front end.React is a JavaScript library for building user interfaces as a single-page application, and it allows the creation of reusable UI components.
- This Project uses a [Firebase real-time database](https://firebase.google.com/products/realtime-database) for chatting to have live chat.The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.
- This project uses for Backend [Laravel web application framework](https://laravel.com/).Laravel is a PHP web framework intended for the development of web applications following the model–view–controller (MVC) architectural pattern.
- For Database this project uses [MySQL database](https://www.mysql.com/).MySQL is an open-source relational database management system (RDBMS). RDBMS is a software or service used to create and manage databases based on a relational model.

<br><br>
<img src="./readme/title5.svg"/>

> Using the above mentioned tech stacks and the wire frames build with figma from the user stories we have, the implementation of the app is shown as below, these are screenshots from the real app

| Login                                 | SignUp                                  | Next                                        |
| ------------------------------------- | --------------------------------------- | ------------------------------------------- |
| ![Login](./readme/realApp/login.jpeg) | ![SignUp](./readme/realApp/signUp.jpeg) | ![SignUp](./readme/realApp/nextSignup.jpeg) |

| MyOrder                                           | Add order                                          | Order                                           |
| ------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| ![Artists results](./readme/realApp/myOrder.jpeg) | ![Artist's Albums](./readme/realApp/addOrder.jpeg) | ![Artist's Albums](./readme/realApp/order.jpeg) |

| Chat                                           | In Chat                                          | Account                                           |
| ---------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| ![Artists results](./readme/realApp/chat.jpeg) | ![Artist's Albums](./readme/realApp/inchat.jpeg) | ![Artist's Albums](./readme/realApp/account.jpeg) |

> 

| Order Details && App OverView                | cancel order                                    |
| -------------------------------------------- | ----------------------------------------------- |
| ![Artist's Albums](./readme/realApp/app.gif) | ![Artists results](./readme/realApp/cancel.gif) |

| Received order                                         | Order Completed                                         |
| ------------------------------------------------------ | ------------------------------------------------------- |
| ![Artist's Albums](./readme/realApp/Receivedorder.gif) | ![Artist's Albums](./readme/realApp/OrderCompleted.gif) |

>

<br><br>
<img src="./readme/title6.svg"/>

> This is an example of how you may give instructions on setting up your project locally.
> To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/aliShouman0/on-your-way.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
