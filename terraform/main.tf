provider "aws" {
  region = "us-east-1"
}
data "aws_ami" "al2023" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
}
data "aws_vpc" "default" {
  default = true
}

resource "aws_instance" "macrobimadoption_server" {
  ami           = data.aws_ami.al2023.id
  instance_type = "t3.micro"

  root_block_device {
    volume_size           = 30
    volume_type           = "gp3"
    delete_on_termination = true
  }
  vpc_security_group_ids = [
    aws_security_group.macrobimadoption_sg.id
  ]
  tags = {
    Name = "macrobimadoption server"
  }
}

resource "aws_security_group" "macrobimadoption_sg" {
  name        = "macrobimadoption_sg"
  description = "Allow all inbound traffic"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "SSH (EC2 Instance Connect)"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.ssh_IP]
  }
  
  ingress {
    description = "HTTPS IN"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "All HTTP outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "macrobimadoption_sg"
  }
}