import os
import re

dir_path = r'c:\Users\IT\Documents\Anti Gravity\D & A Holdings Health Solutions LLC'
html_files = [f for f in os.listdir(dir_path) if f.endswith('.html')]

# We'll capture the optional <p> tag as well to keep it if it's there
# Pattern: (whitespace optionally <p>)Monday ...<br>(whitespace)Saturday ...<br>(whitespace)Sunday ... (optionally </p>)
pattern = re.compile(r'([ \t]*(?:<p>)?)Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM<br>(\s*)Saturday: 9:00 AM &ndash; 2:00 PM<br>(\s*)Sunday: Closed((?:</p>)?)')

for file in html_files:
    file_path = os.path.join(dir_path, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replacer(match):
        prefix = match.group(1) # e.g. "                        " or "                    <p>"
        indent_between = match.group(2) # e.g. "\n                        "
        indent_between2 = match.group(3)
        suffix = match.group(4) # e.g. "</p>" or ""
        
        return (f"{prefix}We are currently available for Telehealth services while our office renovation is being completed.<br>{indent_between}"
                f"Friday: 9:00 AM &ndash; 6:00 PM<br>{indent_between2}"
                f"Saturday: 9:00 AM &ndash; 2:00 PM{suffix}")
                
    new_content, count = pattern.subn(replacer, content)
    
    if count > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file} ({count} replacements)")
