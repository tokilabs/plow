{% method %}
## Domain Events

Events represent change. Specifically a change that has already happened. They are immutable. Events are used inside Entities
to apply the change to it's internal state and are propagated throughout the system to notify interested parties that something happened.

Here's is a simple event implementation that represents the fact that a task was completed:

{% sample lang="ts" %}
!CODEFILE "examples/ts/domain/events/taskCompleted.ts"

{% sample lang="js" %}
!CODEFILE "examples/js/domain/events/taskCompleted.ts"

{% endmethod %}
