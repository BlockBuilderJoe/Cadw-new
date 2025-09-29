import { ItemStack } from "@minecraft/server";

const bookLibrary = {
  "crossing_into_chaos": {
    title: "Crossing into Chaos",
    pages: [
      "The roads to St Davids were treacherous – more goat path than highway. My mule wept. But upon arrival, the palace rose before me like a carved sermon."
    ],
    author: "Gerald"
  }
};

export function getSignedBook(bookId) {
  const bookData = bookLibrary[bookId];
  if (!bookData) {
    console.warn(`Book with ID "${bookId}" not found in library`);
    return null;
  }

  const book = new ItemStack("minecraft:written_book", 1);

  const bookComponent = {
    author: bookData.author,
    title: bookData.title,
    pages: bookData.pages.map(page => ({
      text: page
    })),
    generation: 3,
    resolved: true
  };

  book.setLore([`§r§7Written by ${bookData.author}`]);

  book.nameTag = bookData.title;

  const dynamicProperties = book.getDynamicProperty("minecraft:written_book_content");
  if (dynamicProperties) {
    Object.assign(dynamicProperties, bookComponent);
  } else {
    book.setDynamicProperty("minecraft:written_book_content", bookComponent);
  }

  return book;
}

export function giveBookToPlayer(player, bookId) {
  const book = getSignedBook(bookId);
  if (!book) {
    return false;
  }

  const inventory = player.getComponent("inventory");
  if (inventory && inventory.container) {
    inventory.container.addItem(book);
    player.sendMessage(`§aYou received the book: §e${bookLibrary[bookId].title}`);
    return true;
  }

  return false;
}

export function addBookToLibrary(bookId, title, pages, author) {
  bookLibrary[bookId] = {
    title: title,
    pages: pages,
    author: author
  };
}