### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Allows you to create single page applications that have multipke views/pages without having full page reloads but allows you to have url changes, history and bookmark abilities.

- What is a single page application?
A web page that allows you to dynamically update the content on the page without full page reloads and separate html pages, does all changes on the client side instead of server side routing.

- What are some differences between client side and server side routing?
In client side routing the logic is handled by the browser instead of sending requests to the server. All routing logic is loaded by the browser upfront. In server side routing page loads are handled by sending requests to the server with a standard request response cycle.

- What are two ways of handling redirects with React Router? When would you use each?
The first way is by using the navigate method(formerly <redirect> component before v6) that can be used to reroute a user based on specific conditions placed in the render method. The second way is by using useNavigate(formerly useHistory before v6) to redirect a user programatically to a different route.

- What are two different ways to handle page-not-found user experiences using React Router? 
One way is by using the <Routes> component then placing a path="*" at the end as a catchall to to navigate all nonmatching routes to a specified path. Or you can a custom 404 not found component to display when no routes match the current url which allows for a more customized experience. 

- How do you grab URL parameters from within a component using React Router?
You can use the useParams hook to access the parameters defined in the route path

- What is context in React? When would you use it?
It is a way to share data between components without having to pass them through every level of the components. Allow you to manage state and props easier in one place to avoid prop drilling

- Describe some differences between class-based components and function
  components in React.
  Class components manage state and lifecycle differently by using this.state and lifecycle methosed like componentDidMount to handle side effects while function components use hooks to manage state and effects. Function components are generally more reusable and easier to set up that class-based components.

- What are some of the problems that hooks were designed to solve?
Hooks make it easier to reuse and simplify state logic. Hooks help make components less complex than class components that used lifecycle methods. Hooks eliminated the need for class definitions and binding methods. 