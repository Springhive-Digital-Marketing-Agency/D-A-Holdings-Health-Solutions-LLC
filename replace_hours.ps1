$dir = "c:\Users\IT\Documents\Anti Gravity\D & A Holdings Health Solutions LLC"
$files = Get-ChildItem -Path $dir -Filter "*.html"

# We use regex replace.
# The pattern will look for Monday - Friday... up to Sunday: Closed.
# (?s) makes . match newlines if we need it, but we can just use \s* for whitespaces including newlines.

$pattern = "([ \t]*(?:<p>)?)Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM<br>(\s*)Saturday: 9:00 AM &ndash; 2:00 PM<br>(\s*)Sunday: Closed((?:</p>)?)"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, {
            param($match)
            $prefix = $match.Groups[1].Value
            $indent1 = $match.Groups[2].Value
            $indent2 = $match.Groups[3].Value
            $suffix = $match.Groups[4].Value
            
            return "${prefix}We are currently available for Telehealth services while our office renovation is being completed.<br>${indent1}Friday: 9:00 AM &ndash; 6:00 PM<br>${indent2}Saturday: 9:00 AM &ndash; 2:00 PM${suffix}"
        })
        
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($file.Name)"
    }
}
