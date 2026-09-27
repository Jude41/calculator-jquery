$(".value, .operator").click(function(){
    // Get the value of the button that was clicked 
    let value = $(this).text(); 
    // Get the current value in the display 
    let currentDisplay = $("#display").val(); 

    // Add the clicked value to the display
     $("#display").val(currentDisplay + value);

});

$(".clear").click(function(){
    $("#display").val("");
});

$(".del").click(function(){
    let currentDisplay = $("#display").val();

    // Remove last Character 
    let newDisplay = currentDisplay.slice(0,-1);
    $("#display").val(newDisplay);
})

$(".equals").click(function(){
    let expression = $("#display").val();

    if (expression === ""){
        return;
    }
    try { 
    // Convert the multiplication symbol to JavaScript's * 
    expression = expression.replace(/x/g, "*"); // Convert the division symbol to JavaScript's / 
    expression = expression.replace(/÷/g, "/"); // Convert the subtraction symbol to JavaScript's - 
    expression = expression.replace(/-/g, "-"); // Convert percentage to /100 
    expression = expression.replace(/%/g, "/100"); // Calculate the expression 
    let result = eval(expression); // Display the result 
    $("#display").val(result); } 
    catch (error) { 
        // Display an error if the calculation fails 
        $("#display").val("Error"); } 
    });
