import requests
from bs4 import BeautifulSoup
import time

def save_all_pages_text_to_single_file(start_page, end_page, url_template, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        for page in range(start_page, end_page + 1):
            url = url_template.format(page)
            response = requests.get(url)
            
            # Check if the request was successful
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Extract textual content from the HTML
                text_content = soup.get_text(separator='\n', strip=True)
                
                # Write a header to indicate the start of a new page's content
                file.write(f"---- Start of page {page} ----\n")
                file.write(text_content)
                file.write(f"\n---- End of page {page} ----\n")
                
                # Print out a confirmation that the page content was appended
                print(f"Appended text of page {page} content to {filename}")
                
                # Wait for 1 second before making the next request
                time.sleep(1)
            else:
                print(f"Failed to retrieve page {page}")

# The name of the file where you want to save all the text
filename = 'weillcornell_all_pages_text.txt'

# Use the function
url_template = 'https://weillcornell.org/doctors-directory?page={}'
save_all_pages_text_to_single_file(1, 40, url_template, filename)
