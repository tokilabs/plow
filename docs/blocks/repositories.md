{% method %}
## Repositories

Repositories are how we call the classes that permanently store aggregate roots.
If you are using [GetEventStore](http://geteventstore.com) to store your aggregates, all you
need to do is extend the class `EventSourcedRepositoryOf<TAggregate, TAggtId>`;

If you are using Plow's container, you can simply inject `IEventStore` and `IEventBus` as
they are already configured in the inversify container.

{% sample lang="ts" %}
!CODEFILE "examples/ts/repositories/task.ts"

{% sample lang="js" %}
!CODEFILE "examples/ts/repositories/task.ts"

{% common %}
You can then use the rpository methods `save(aggregate: TAggregate): Promise<IDomainEvent[]>` and
`getById(id: TId): Promise<TAggregate>` to store and retrieve aggregates.

> **[info] Note:**
> Trying to save an aggregates whith no events to be persisted will throw an error.

Plow will propagate the persisted events through the event bus.
{% endmethod %}
