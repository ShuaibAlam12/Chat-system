# Chat System

This is a simple chat application built using Express, MongoDB, and Mongoose. It allows users to add, edit, and delete chat messages.


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ShuaibAlam12/Chat-system.git
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the MongoDB server:
    ```sh
    mongod
    ```
2. Initialize the database with sample data:
    ```sh
    node init.js
    ```
3. Start the Express server:
    ```sh
    node index.js
    ```
4. Open your browser and navigate to `http://localhost:3000/chats` to view the chat application.

## Endpoints

- `GET /chats` - View all chat messages.
- `GET /chats/new` - Form to add a new chat message.
- `POST /chats/newMsg` - Add a new chat message.
- `GET /chats/:_id/edit` - Form to edit an existing chat message.
- `PUT /chats/:_id` - Update an existing chat message.
- `DELETE /delete/:_id` - Delete a chat message.

## Dependencies

- express: ^4.21.2
- ejs: ^3.1.10
- method-override: ^3.0.0
- mongoose: ^8.9.5

## License

This project is licensed under the ISC License.