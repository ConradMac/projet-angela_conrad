<?php

namespace App\Entity;

use App\Repository\DocumentsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocumentsRepository::class)]
class Documents
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTime $sending_date = null;

    #[ORM\ManyToOne(inversedBy: 'documents')]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $users = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(length: 400, nullable: true)]
    private ?string $ui_ux = null;

    #[ORM\Column(length: 400, nullable: true)]
    private ?string $seo = null;

    #[ORM\Column(length: 400, nullable: true)]
    private ?string $image_service = null;

    #[ORM\ManyToMany(targetEntity: Services::class, inversedBy: 'documents')]
    private Collection $services;

    public function __construct()
    {
        $this->services = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSendingDate(): ?\DateTime
    {
        return $this->sending_date;
    }

    public function setSendingDate(\DateTime $sending_date): self
    {
        $this->sending_date = $sending_date;

        return $this;
    }

    public function getUsers(): ?User
    {
        return $this->users;
    }

    public function setUsers(?User $users): self
    {
        $this->users = $users;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUiUx(): ?string
    {
        return $this->ui_ux;
    }

    public function setUiUx(?string $ui_ux): self
    {
        $this->ui_ux = $ui_ux;

        return $this;
    }

    public function getSeo(): ?string
    {
        
        return $this->seo;
    }

    public function setSeo(?string $seo): self
    {
        $this->seo = $seo;

        return $this;
    }

    public function getImageService(): ?string
    {
        return $this->image_service;
    }

    public function setImageService(?string $image_service): self
    {
        $this->image_service = $image_service;

        return $this;
    }

    /**
     * @return Collection<int, Services>
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Services $service): self
    {
        if (!$this->services->contains($service)) {
            $this->services->add($service);
        }

        return $this;
    }

    public function removeService(Services $service): self
    {
        $this->services->removeElement($service);

        return $this;
    }
}
