const fs = require('node:fs');
const [, , action, title, content] = process.argv;

const addNote = (title, content) => {
  const allowedPattern = /[^a-zA-Z0-9]/;

  if (!title) {
    console.log('Title is required');

    return;
  }

  if (allowedPattern.test(title)) {
    console.log(`Special characters are not allowed in title`);

    return;
  }

  if (!content) {
    console.log('Content is required');

    return;
  }

  // Check if the note already exists
  fs.access(`${title}.txt`, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log(err);
      console.log(`${title}.txt already exist`);
    } else {
      // If note does not exist, create it
      console.log('File does not exist.');
      fs.writeFile(`${title}.txt`, content, (err) => {
        if (err) return console.error('Error:', err);
        console.log(`Note ${title} added!`);
      });
    }
  });
};

const readNote = (title) => {
  const allowedPattern = /[^a-zA-Z0-9]/;

  if (!title) {
    console.log('Title is required');

    return;
  }

  if (allowedPattern.test(title)) {
    console.log(`Special characters are not allowed in title`);

    return;
  }

  // Check if the note already exists
  fs.access(`${title}.txt`, fs.constants.F_OK, (err) => {
    if (!err) {
      fs.readFile(`${title}.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`Reading Note: ${title}\n\n${data}`);
      });
    } else {
      console.log('File does not exist.');
    }
  });
};

const deleteNote = (title) => {
  const allowedPattern = /[^a-zA-Z0-9]/;

  if (!title) {
    console.log('Title is required');

    return;
  }

  if (allowedPattern.test(title)) {
    console.log(`Special characters are not allowed in title`);

    return;
  }

  // Check if the note already exists
  fs.access(`${title}.txt`, fs.constants.F_OK, (err) => {
    if (!err) {
      fs.unlink(`${title}.txt`, (err) => {
        if (err) throw err;
        console.log(`Note ${title} deleted!`);
      });
    } else {
      console.log('File does not exist.');
    }
  });
};

switch (action) {
  case 'add':
    addNote(title, content);
    break;
  case 'read':
    readNote(title);
    break;
  case 'delete':
    deleteNote(title);
    break;
  default:
    console.log('Action not recognized!');
}
