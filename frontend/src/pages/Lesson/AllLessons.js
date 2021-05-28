const AllLessons = [
    {
      chapter: 'introduction',
      section: 'print',
      description: [
        {
          type: 'text',
          text: `In Python, the print() function are referred to as output functions.\nFor example, when we observe this program:`
        },
        {
          type: 'code',
          text: `print("Congratuations in taking the first steps in learning Python!")`
        },
        { type: 'text', text: `The output that results would be:` },
        {
          type: 'code',
          text: `Congratualtions in taking the first steps in learning Python`
        }
      ]
    },
  
    {
      chapter: 'introduction',
      section: 'Variables',
      description: [
        {
          type: 'text',
          text: `In Python, the a variable is something that we use to store data.\nUnlike other programming langauges, Python variables do not need to define a type.\nWe can define a variable in Python like:`
        },
        {
          type: 'code',
          text: `myVar = 'A new Variable'`
        },
        { type: 'text', text: `This creates a variable called myVar with the string 'A new Variable' stored inside myVar` },
        { type: 'text', text: `We can also create a variable to store numbers like so:` },
        {
            type: 'code',
            text: `myNum = 5`
        },
        { type: 'text', text: `Now, this new variable myNum holds the value 5` },
      ]
    }
  ];


  export default AllLessons;