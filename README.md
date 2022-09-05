# Reference architecture

**This repository shows the implementation of clean architecture according to Robert C. Martin using Typescript, React and Firebase Firestore.**

This repository consists of four packages:

- `entities`: Contains application independent business logic. This package has no dependencies.
- `interactors`: Contains application dependent business logic, aka Use Cases or User Stories, as well as interfaces that create a plugin architecture for view and database persistence.
- `firebase-gateway`: Contains the implementation of the persistance interface using firebase firestore
- `app`: This package bundles all together and adds react as a frontend framework.

Image

![Architecture](https://github.com/speisekammer/reference-architecture/blob/master/Architecture.drawio.svg)
