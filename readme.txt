Login form project

Description: A basic login form that checks the validity of the users input and directs them to another page if they are satisfied.

languges used: React and sass

Learning components: React hooks, React Router, event listners, mixins, advanced css styling, file management.

Things learned from project
                                    React
    - when importing modules you can use the as keyword to variablialize
    - .test can be used to check for membership in an input
        syntax: var stuff = /['stuff']/ -->  var = stuff.test(array)
    - tenitary operators can be used in styling by using the styling attribute on a component
    - Always create state for boolean checks
    - All state used inside a useEffect should be included as a dependency
    - Use the onChange to obtain the target.value of an input
    - npm react-router-dom needs to be downloaded in order to use react router
    - App.js should contain the following components for react router to work
        - Import all pages that are going to be routed to
        - BrowserRouter as Router, Routes, Route frmo 'react-router-dom
        - Router is the parent element
        - Routes will be the child elements for all routes
        - Route will contain the pages
            attrubutes include (path = '/' for home) or (path = '/pageName') and element={<PageName/>}
        - Routes essentially define the make up of the page
        - useNavigate is used on the pages to direct or redirect to one another
            - create a variable nav = useNavigate()
            - on an event you can direct the user with nav('/pageName')
            - to go back to the previous page use nav(-1)


                                        sass
    - when defining a breakpoints use !default after the parens
    - syntax for breakpoints = @mixin mixin-name { @media (max or min (...)) @content}
    - use @include on other pages to use breakpoints 
    - when using 100wv and 100vh use box-sizing border box and border 3px to get rid of white space
    - to make a blurred background do the following:
        - create a container with position relative
        - a child blur element with pictures and blur
        - use poisiton fixed transform scale(1.1) to remove white glow on borders


