variable "ssh_IP" {
  description = "Public IP address to allow SSH access."
  type        = string
  default     = "0.0.0.0/0"
}