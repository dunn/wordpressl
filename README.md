# Ansible playbook for WordPress

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

The Ansible invocation is performed by the `bin/create` wrapper
script.  Running that will prompt you for the hostname, SSH key, and
passwords which are passed to Ansible.

If provisioning fails, the configuration is written to disk.  Delete
it immediately if you don’t want to try again, since it will contain
passwords in plain-text.

## Prerequisites

- Ansible 2.1.x

# Gotchas and troubleshooting

- The hostname you provide to Ansible can be the IP address of your
  server, or the domain name.  Keep in mind that it will be used for
  the Apache virtual host as well as the WordPress configuration

  If you use an IP address and later point a domain name at your
  server, you’ll need to update the WordPress configuration, since
  WordPress does some redirection of its own and will only function
  correctly if it knows what the domain name is.  On the server, run
  `/usr/local/bin/wp_url "https://www.new.url"` to update the
  information in WordPress.
