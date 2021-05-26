const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the boba tea."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  

  Tutorial.findAll({ where: condition })
  
    .then(data => {
      console.log(condition + "************");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teas."
      });
    });
};

// find all Milk teas
exports.findAllMilk = (req, res) => {
  console.log("*******HI IN FIND milk*****");
  Tutorial.findAll({ where: { category: "Milk" } })
    .then(data => {
      res.send(data);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tea."
      });
    })
    .catch(err => {
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while retrieving tea."
      // });
    });
};

// find all Fruit teas
exports.findAllFruit = (req, res) => {
  console.log("*******HI IN FIND fruit*****");
  Tutorial.findAll({ where: { category: "Fruit" } })
    .then(data => {
      res.send(data);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tea."
      });
    })
    .catch(err => {
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while retrieving tea."
      // });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  console.log("*******HI IN FIND PUBLISHED*****");
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tea."
      });
    })
    .catch(err => {
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while retrieving tea."
      // });
    });
};

// find all pending Tutorial
exports.findAllPending = (req, res) => {
  console.log("*******HI IN FIND pending*****");
  Tutorial.findAll({ where: { published: false } })
    .then(data => {
      res.send(data);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tea."
      });
    })
    .catch(err => {
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while retrieving tea."
      // });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tea with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tea was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tea with id=${id}. Maybe Tea was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tea with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tea was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tea with id=${id}. Maybe Tea was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tea with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Teas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all teas."
      });
    });
};

