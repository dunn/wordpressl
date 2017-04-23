# Ansible playbook for WordPress

This is a playbook for setting up a stock WordPress installation with
SSL/TLS support thanks to [Let’s Encrypt](https://letsencrypt.org/).

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

## Basic use

1. Create a CentOS virtual server (untested on other OSs) on
   DigitalOcean or the provider of your choice (note that it’s assumed
   you can SSH in as root initially).

1. Edit `inventory` and set `ansible_ssh_host` to the hostname of the
   server.  If you want a TLS certificate generated, this needs to be
   a domain name rather than an IP address.

1. Download the extra roles with `ansible-galaxy install --roles-path roles -r roles/requirements.yml`.

1. Run `ansible-playbook main.yml -i inventory`.

1. If you choose not to create a TLS certificate for the server, you
   can add one later with `ansible-playbook tls.yml -i inventory`.

## Prerequisites

- Ansible 2.2.0.0 or higher with passlib (`brew install ansible` will
  meet this requirement).

## Extras

- A script will be installed at `/usr/local/bin/wp_url` on the server;
    this script lets you update the hostname in the WordPress database.
    Usage:

    ```shell
    wp_url https://new.url.com
    ```

    It will prompt you for the password to the WordPress database.

- You can download the WordPress database for backing up or migrating
  it by running `ansible-playbook download_db.yml -i inventory`.
