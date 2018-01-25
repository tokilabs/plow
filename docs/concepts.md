# A brief introduction to DDD, ES and CQRS

If this letter soup is new to you, read on to get an idea of what we are talking about, but keep in mind
this is just a simplistic view to get you started on the concepts.

## Domain-Driven Design (DDD)

The domain is the sphere of knowledge your application represents and works with. Domain-Driven Design
is all about mapping that domain into software artifacts to ease the creation of complex applications.
DDD focus on three principles:

1. Start and focus on the core domain and domain logic
2. Base complex design on a model of the domain
3. Keep close collaboration between developers and domain experts to keep improving the domain

### Core definitions

*(from https://www.mirkosertic.de/blog/2012/07/domain-driven-design-overview-and-building-blocks/)*

#### Domain
A sphere of knowledge (ontology), influence, or activity. The subject area to which the user applies a program is the domain of the software.

#### Model
A system of abstractions that describes selected aspects of a domain and can be used to solve problems related to that domain.

#### Ubiquitous Language
A language structured around the domain model and used by all team members to connect all the activities of the team with the software.

#### Context
The setting in which a word or statement appears that determines its meaning.

### Prerequisites for the successful application of DDD

- Your domain is not trivial
- The project team has experience and interest in Object Oriented Programming/Design
- You have access to domain experts
- You have an iterative process

### Building blocks

#### Strategic patterns

##### Domain, and Subdomains
As mentioned above, a Domain is a sphere of knowledge. A Domain can be split into Subdomains if it is too large. The Domain is usually
known as the problem space.

##### Bounded Context
A Bounded context should be aligned with a Domain or a Subdomain. There is one Ubiquitous Language applied within a Bounded Context.
A Bounded Context is usually the solution space, where we design our software or business solution.

##### Context Map
A Context Map displays the alignment of Domains, Subdomains and their Bounded Contexts. A Context Map also shows dependencies between
Bounded Contexts. Such dependencies can be upstream or downstream. Dependencies show where integration patterns should or must be applied.

#### Tactical patterns

##### Entity
An object that is not defined by its attributes, but rather by a thread of continuity and its identity.

> ** [info] Example **
> Most airlines distinguish each seat uniquely on every flight. Each seat is an entity in this context. However, Southwest Airlines
> (or EasyJet/RyanAir for Europeans) does not distinguish between every seat; all seats are the same. In this context, a seat is
> actually a value object.

##### Value Object
An object that contains attributes but has no conceptual identity. They should be treated as immutable.

> ** [info] Example **
> When people exchange dollar bills, they generally do not distinguish between each unique bill; they only are concerned about the face
> value of the dollar bill. In this context, dollar bills are value objects. However, the Federal Reserve may be concerned about each
> unique bill; in this context each bill would be an entity.

##### Aggregate
A collection of objects that are bound together by a root entity, otherwise known as an aggregate root. The aggregate root guarantees the consistency of changes being made within the aggregate by forbidding external objects from holding references to its members. Aggregates can also be seen as a kind of bounded context, giving the root entity and the whole object graph a context in which they are used.

> ** [info] Example **
> When you drive a car, you do not have to worry about moving the wheels forward, making the engine combust with spark and fuel, etc.;
> you are simply driving the car. In this context, the car is an aggregate of several other objects and serves as the aggregate root to
> all of the other systems. A steering wheel can be rotated, this is it’s context within the car aggregate. It can also be produced or
> recycled. This usually happens not within the driving car context, so this would be another aggregate, probably referencing the car as well.

##### Domain Events
Domain events can be used to model distributed systems. The model will become more complex, but it can be more scalable. Domain Events are often used in an [Event Driven Architecture](https://en.wikipedia.org/wiki/Event-driven_architecture)

##### Service
When an operation does not conceptually belong to any object. Following the natural contours of the problem, you can implement these operations in services.

##### Repository
Repositories save and retrieve Entities or Aggregates to or from the underlying storage mechanism. Repositories are part of the domain model, so they **MUST be database vendor independent**. Repositories can use DAOs (Data Access Objects) for retrieving data and to encapsulate database specific logic from the domain. Repositories can use an [Aggregate Oriented Database](https://martinfowler.com/bliki/AggregateOrientedDatabase.html).

> **[warning] Note:**
> Sequelize "models" are Data Access Objects! Don't make them your entities!

##### Modules (a.k.a. Packages)
Components with high cohesion should be packaged together. Modules are defined by business dependencies, not by the technical architecture.

> ** [info] Example**
> The Bill Aggregate and the Bill Repository should be put into the same module, as they are very tightly coupled.

##### Factory
Methods for creating domain objects should delegate to a specialized Factory object such that alternative implementations may be easily interchanged.

> ** [info] Read More: **
> [Introduction on Wikipedia](https://en.wikipedia.org/wiki/Domain-driven_design)
> [Domain-Driven Design Reference](https://domainlanguage.com/ddd/reference/)
> [DDD in practice](https://www.infoq.com/articles/ddd-in-practice)
> [Domain-Driver Design](https://www.amazon.com/exec/obidos/ASIN/0321125215/domainlanguag-20) book by Eric Evans
