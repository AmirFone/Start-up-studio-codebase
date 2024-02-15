import requests
import time

def save_all_pages_to_single_file(start_page, end_page, url_template, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        for page in range(start_page, end_page + 1):
            url = url_template.format(page)
            response = requests.get(url)
            
            # Check if the request was successful
            if response.status_code == 200:
                # Write a marker to indicate the start of a new page
                file.write(f"\n\n---- Start of page {page} ----\n\n")
                file.write(response.text)
                file.write(f"\n\n---- End of page {page} ----\n\n")
                
                # Print out a confirmation that the page content was appended
                print(f"Appended page {page} content to {filename}")
                
                # Wait for 1 second before making the next request
                time.sleep(1)
                print(f"page {page} done")
            else:
                print(f"Failed to retrieve page {page}")

# The name of the file where you want to save all the contents
filename = 'weillcornell_all_pages.txt'

# Use the function
url_template = 'https://weillcornell.org/doctors-directory?page={}'
save_all_pages_to_single_file(1, 40, url_template, filename)
