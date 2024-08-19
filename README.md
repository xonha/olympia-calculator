# Project Background

You have been assigned to continue the development of a calculator application for Olympia’s accounting team. The calculator is intended to assist the team with their day-to-day calculations, ensuring accuracy and efficiency in their work. The current version of the calculator is quite basic, providing only the ability to evaluate string expressions and return the result.

However, the accounting team and the security team have raised concerns about the current implementation, particularly with how calculations are performed using the eval() function in JavaScript. While this function can evaluate mathematical expressions, it also poses a significant security risk. If not properly validated, eval() could allow users to execute arbitrary JavaScript code, which would be a serious vulnerability, especially if the calculator were to be integrated into Olympia's ERP system.

Additionally, the team has identified several areas where the calculator could be more useful and user-friendly.

## Key Points to Consider

- **Project Security:** The use of the eval() function needs to be re-evaluated due to its potential to execute unvalidated code. This poses a significant risk, particularly if the calculator is integrated with Olympia's ERP system. Consider how the calculator processes these expressions and whether there’s a safer, more reliable approach to performing calculations.

- **Advanced Functionalities:** The accounting team often deals with proportional reasoning in their work, where they need to quickly compare ratios or perform cross-multiplication. Consider how you might introduce features that help with such calculations, making the tool more aligned with their financial tasks.

- **Tracking Calculations:** The team has expressed a desire to review their past calculations without needing to re-enter data. Think about how the calculator could offer a way to keep track of recent operations, perhaps by providing a history or a log that allows users to reference or reuse previous calculations.

- **Enhanced User Interaction:** While the current calculator relies on mouse clicks, many users have indicated that they would find it more efficient to use keyboard inputs for their calculations. Explore ways to enhance the user experience by allowing the calculator to handle keyboard input, making it more versatile and quicker to use.


- **User Experience:** The team relies heavily on this tool throughout their workday. They want the calculator to be more user-friendly and adaptable to varying light conditions and different devices. Small adjustments in the interface and the way they interact with the calculator could make a big difference in their productivity.

# Your Task:

As the next developer in charge, your mission is to enhance the calculator to better meet the accounting team’s needs while addressing any potential security risks and improving the overall usability. Throughout the instructions, you will find a number of possible enhancements and considerations. It is important to note that you are not expected to implement all of these features. Your ability to prioritize your time and focus on developing the functionalities that will add the most value to the project is what will be evaluated.

Your goal is to deliver a tool that the team can rely on, making their work easier and more efficient. Prioritize wisely and think critically about which features will have the greatest impact.
