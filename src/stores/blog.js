import axios from "axios";
import { defineStore } from "pinia";
// import { POSTS_URL } from "@/constants";
export const useBlogStore = defineStore('post', {
  state: () => ({
    posts: []

}),
  actions: {
    async getPosts() {
      const postData = [
        {
            "_id": "64b17373aaaca0d85a524bca",
            "title": "In labore quaerat vero nemo totam aperiam.",
            "content": "Illo consectetur nulla neque dolorem ut. Earum impedit voluptatem excepturi eligendi totam sint ex iure. Illo autem cumque voluptatum maxime recusandae exercitationem quia reprehenderit dolore.\nDignissimos quas beatae accusamus repellat. Quasi maxime numquam praesentium ab nam ex possimus itaque. Perspiciatis necessitatibus cupiditate aut eaque minus sapiente accusantium quo consequuntur.\nVero quos nesciunt error deserunt suscipit. Culpa optio nobis. Asperiores et nam non perspiciatis veniam quas autem.",
            "author": {
                "_id": "64b17373aaaca0d85a524bc8",
                "email": "Dorcas27@hotmail.com",
                "password": "$2b$10$LzKJ9lYS.Jlozzuoi6GTu.mOKDrkEC5AGSmfmoVMo9TGsGkFkTRRi",
                "name": "Andreanne",
                "roles": [
                    "user"
                ],
                "nickname": "Lee.Douglas",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
                "registrationDate": "2023-07-14T16:10:27.787Z",
                "lastLoginDate": "2023-07-14T16:10:27.787Z",
                "__v": 0
            },
            "hashtags": [
                "a",
                "perspiciatis",
                "voluptatem"
            ],
            "createdAt": "2023-07-14T16:10:27.789Z",
            "updatedAt": "2023-07-14T16:10:27.789Z",
            "__v": 1
        },
        {
            "_id": "64b17376aaaca0d85a524c97",
            "title": "Nihil nisi ducimus aliquam totam nemo.",
            "content": "Nemo deserunt eligendi dolor tempora consequatur. Consectetur eius quae ducimus architecto. Deserunt aut odit ducimus soluta incidunt repudiandae tenetur molestiae.\nDolorem quisquam tempore consequatur itaque quas voluptate sint inventore. Iusto dolorum consequatur. Deleniti perferendis magnam consectetur quaerat fugiat atque veniam debitis.\nModi dolorem ducimus nemo eveniet laudantium voluptatem esse doloremque rerum. Officia delectus odit quas. Laborum eaque vel nisi quos beatae accusamus.",
            "author": {
                "_id": "64b17376aaaca0d85a524c95",
                "email": "Carolina.Hansen93@gmail.com",
                "password": "$2b$10$mP.FR6/VG8pVvjvIRW2B9.k/A9P/.KG3zBHMNiv7Cywnh5fbDJM0W",
                "name": "Aurore",
                "roles": [
                    "user"
                ],
                "nickname": "Jaquelin.Satterfield",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/414.jpg",
                "registrationDate": "2023-07-14T16:10:30.049Z",
                "lastLoginDate": "2023-07-14T16:10:30.049Z",
                "__v": 0
            },
            "hashtags": [
                "aut",
                "dolores",
                "aperiam"
            ],
            "createdAt": "2023-07-14T16:10:30.050Z",
            "updatedAt": "2023-07-14T16:10:30.050Z",
            "__v": 1
        },
        {
            "_id": "64b17378aaaca0d85a524d64",
            "title": "Veritatis possimus ab fuga ratione tenetur dolor.",
            "content": "Dolorem repellendus doloribus consequuntur excepturi ratione iusto sit. Quos esse a laboriosam reprehenderit at quae placeat. Ab iusto odit eaque voluptatum reiciendis consectetur officiis ducimus doloremque.\nBeatae maxime hic reprehenderit veritatis in voluptatum necessitatibus. Voluptatum laborum soluta labore voluptate consectetur neque unde iure. Voluptates eius nisi.\nDolore laborum impedit esse dolorum accusantium temporibus voluptate. Repellat consectetur atque unde sapiente ab quia. Doloremque quam necessitatibus minus odio reprehenderit facere veniam.",
            "author": {
                "_id": "64b17378aaaca0d85a524d62",
                "email": "Drew_Schoen@gmail.com",
                "password": "$2b$10$2g7gxehNuN/n27BDwZB77eLlRVrxdX5oEaeRzl0PG/852zeTQ1stm",
                "name": "Rory",
                "roles": [
                    "user"
                ],
                "nickname": "Fausto_Beahan",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/922.jpg",
                "registrationDate": "2023-07-14T16:10:32.306Z",
                "lastLoginDate": "2023-07-14T16:10:32.306Z",
                "__v": 0
            },
            "hashtags": [
                "laboriosam",
                "unde",
                "ad"
            ],
            "createdAt": "2023-07-14T16:10:32.307Z",
            "updatedAt": "2023-07-14T16:10:32.307Z",
            "__v": 1
        },
        {
            "_id": "64b1737aaaaca0d85a524e31",
            "title": "Numquam doloribus repellat architecto adipisci molestias.",
            "content": "Accusantium quos harum quasi praesentium cupiditate. Earum at laborum aut dignissimos magnam rem ut. Natus eligendi deserunt.\nSint pariatur quis quod similique aut nemo reiciendis. Quia neque vitae pariatur veniam eum. Perspiciatis voluptatem natus cum libero ad accusamus veniam deleniti nam.\nSint deleniti ea quisquam nemo perferendis ab veniam. Sequi veniam amet laborum dolores accusantium dolorum. Accusantium nemo mollitia at sunt natus.",
            "author": {
                "_id": "64b1737aaaaca0d85a524e2f",
                "email": "Clemens.Thompson87@yahoo.com",
                "password": "$2b$10$bqUOzz2iHfjIHB.tdimL4ug.g3Q9nYxsN.Dxqtmm0MFFU.l69DtUC",
                "name": "Madalyn",
                "roles": [
                    "user"
                ],
                "nickname": "Tess90",
                "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
                "registrationDate": "2023-07-14T16:10:34.550Z",
                "lastLoginDate": "2023-07-14T16:10:34.550Z",
                "__v": 0
            },

            "hashtags": [
                "unde",
                "animi",
                "nobis"
            ],
            "createdAt": "2023-07-14T16:10:34.551Z",
            "updatedAt": "2023-07-14T16:10:34.551Z",
            "__v": 1
        }
      ]
      this.posts = postData
    }
  }
})
