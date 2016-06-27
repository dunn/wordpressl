# Ansible playbook for WordPress

This is a playbook for setting up a stock WordPress installation with
SSL/TLS support thanks to [Let’s Encrypt](https://letsencrypt.org/).

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

## Basic use

1. Create a CentOS virtual server (untested on other OSs) on
   DigitalOcean or the provider of your choice (note that it’s assumed
   you can SSH in as root initially).

2. Run `bin/create`.  It will prompt you for the hostname, SSH key,
   and passwords which are passed to Ansible.

3. If provisioning fails, the configuration is written to disk.
   Delete it immediately if you don’t want to try again, since it will
   contain passwords in plain-text.

## Prerequisites

- Ansible 2.1.x

# Gotchas and troubleshooting

- The hostname you provide to Ansible can be the IP address of your
  server, or the domain name.  The hostname will be used for the
  Apache virtual host as well as the WordPress configuration.

    If you use an IP address, comment out the `- include: acme.yml`
    line in `roles/apache/tasks/main.yml`.  Otherwise a SSL/TLS
    certificate will be issued for the IP address rather than the
    domain name.  You’ll have to run the SSL/TLS tasks manually.

    If you use an IP address and later point a domain name at your
    server, you’ll need to update the WordPress configuration, since
    WordPress does some redirection of its own and will only function
    correctly if it knows what the domain name is.  On the server, run
    `/usr/local/bin/wp_url "https://www.new.url"` to update the
    information in WordPress.
