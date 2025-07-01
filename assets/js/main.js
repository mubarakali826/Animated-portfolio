// Update copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    
    $('.copyright').each(function() {
        $(this).html(`${currentYear} © Edward Guillen. All rights reserved.`);
    });
}

// Call when document is ready
$(document).ready(function() {
    // ... existing ready function code ...
    
    // Update copyright year
    updateCopyrightYear();
}); 