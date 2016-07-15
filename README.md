# hangman
Investigation of client app architectures.

## Aims
This repository is turning into an exploration of separating side-effects from domain logic in client side apps.
I have previously 'solved' this problem when the user is separated from the domain by a rest interface.
The complexities of data flow between ui and domain are alot more interesting in a single application.

### Current thoughts.
- Having the domain define port interfaces that are implemented using adapters.
- Having the domain model be stateless and have the infrastructure code manage the current version of the state.
- Having the domain model manage state and communication between ui, domain and services be event driven. vaguly emulating actors and message passing.
